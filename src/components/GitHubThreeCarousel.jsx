import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Component: GitHubThreeCarousel
// Requisitos: npm i three
// Uso: <GitHubThreeCarousel username="TU_USUARIO" />

export default function GitHubThreeCarousel({ username }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const meshRef = useRef(null);
  const textureRef = useRef(null);
  const animationIdRef = useRef(null);

  const [repos, setRepos] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch repos
  useEffect(() => {
    if (!username) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos?per_page=50&sort=updated`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
          setIndex(0);
        } else {
          setRepos([]);
          console.error("GitHub API: respuesta inesperada", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setRepos([]);
      })
      .finally(() => setLoading(false));
  }, [username]);

  // Initialize THREE scene when component mounts
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 0.6);
    directional.position.set(5, 5, 5);
    scene.add(directional);

    // Geometry: a slightly rounded plane effect using box with low depth
    const geometry = new THREE.PlaneGeometry(3.2, 1.8, 32, 32);

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // subtle background
    scene.background = new THREE.Color(0x0b1020);

    // Render loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      // small idle rotation
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.03;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      // dispose textures and renderer
      if (textureRef.current) textureRef.current.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  // Load texture for current repo whenever index or repos change
  useEffect(() => {
    if (!repos || repos.length === 0) return;
    const repo = repos[index];
    if (!repo) return;

    const loader = new THREE.TextureLoader();
    // Using GitHub Open Graph banner as base image
    const url = `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`;

    // Load texture and fade in
    loader.load(
      url,
      (tex) => {
        tex.encoding = THREE.sRGBEncoding;
        tex.anisotropy = 4;

        // dispose previous texture
        if (textureRef.current) {
          textureRef.current.dispose();
        }
        textureRef.current = tex;

        // apply to material with a smooth transition
        const mesh = meshRef.current;
        if (!mesh) return;

        // create a second material for crossfade
        const oldMat = mesh.material;
        const newMat = oldMat.clone();
        newMat.map = tex;
        newMat.needsUpdate = true;

        // quick hack: set material to new and animate opacity
        mesh.material = newMat;
        newMat.opacity = 0;
        newMat.transparent = true;

        let t = 0;
        const fade = () => {
          t += 0.06; // fade speed
          newMat.opacity = Math.min(1, t);
          if (t < 1) requestAnimationFrame(fade);
          else {
            // finalize
            newMat.transparent = false;
            try {
              oldMat.dispose();
            } catch (error) {
              console.warn("Error disposing old material:", error);
            }
          }
        };
        fade();
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
      }
    );
  }, [index, repos]);

  const handleNext = () => {
    if (repos.length === 0) return;
    setIndex((p) => (p + 1) % repos.length);
  };
  const handlePrev = () => {
    if (repos.length === 0) return;
    setIndex((p) => (p - 1 + repos.length) % repos.length);
  };

  // Small UI overlay (title / buttons)
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <div
        ref={mountRef}
        style={{ width: "100%", height: 420, borderRadius: 12, overflow: "hidden" }}
      >
        {loading && (
          <div
            style={{
              position: "absolute",
              color: "#cfd8ff",
              padding: 12,
              fontSize: 14,
            }}
          >
            Cargando repositorios...
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
        <div>
          <button onClick={handlePrev} style={{ marginRight: 8 }}>
            ⬅ Anterior
          </button>
          <button onClick={handleNext}>Siguiente ➡</button>
        </div>

        <div style={{ textAlign: "right" }}>
          {repos.length > 0 ? (
            <>
              <div style={{ fontWeight: "bold" }}>{repos[index].name}</div>
              <div style={{ fontSize: 12 }}>{repos[index].description || "Sin descripción"}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {index + 1} / {repos.length}
              </div>
            </>
          ) : (
            <div style={{ color: "#999" }}>No hay repositorios</div>
          )}
        </div>
      </div>
    </div>
  );
}
