"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters - Katakana + Latin + Numerals
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to store the vertical position (y coordinate) of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // start off-screen
    }

    const draw = () => {
      // Background layer with opacity for the trailing effect
      // If light mode, make it white. If dark mode, make it dark.
      if (resolvedTheme === "light") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      } else {
        ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text color (Cyan for dark mode, subtle gray/cyan for light mode)
      if (resolvedTheme === "light") {
        ctx.fillStyle = "rgba(6, 182, 212, 0.15)"; // subtle cyan in light mode
      } else {
        ctx.fillStyle = "#06b6d4"; // vivid cyan in dark mode
      }
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly to create staggered effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30fps for smooth animation

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resolvedTheme]); // Re-run effect when theme changes to update colors

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50 dark:opacity-40"
      aria-hidden="true"
    />
  );
}
