import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  angle: number;
  distance: number;
  armOffset: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const galaxyCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      galaxyCenter.current = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Star[] = [];
    const starCount = 40;
    const colors = [
      { r: 34, g: 211, b: 238 },   // Cyan-400
      { r: 96, g: 165, b: 250 },   // Blue-400
      { r: 192, g: 132, b: 252 },  // Purple-400
      { r: 59, g: 130, b: 246 },   // Blue-500
      { r: 139, g: 92, b: 246 },   // Purple-500
      { r: 6, g: 182, b: 212 },    // Cyan-500
    ];

    // Initialize stars in a galaxy/spiral pattern
    const numArms = 3;
    for (let i = 0; i < starCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const armIndex = i % numArms;
      const armAngle = (armIndex / numArms) * Math.PI * 2;
      const distance = Math.random() * 300 + 50;
      const angle = armAngle + (distance / 300) * Math.PI * 2;
      const armOffset = (Math.random() - 0.5) * 50;
      
      stars.push({
        x: 0,
        y: 0,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        color: `${color.r}, ${color.g}, ${color.b}`,
        angle,
        distance,
        armOffset,
      });
    }

    let animationId: number;
    let baseRotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Slow continuous rotation
      baseRotation += 0.001;

      stars.forEach((star) => {
        // Calculate star position in galaxy
        const starAngle = star.angle + baseRotation;
        
        star.x = galaxyCenter.current.x + Math.cos(starAngle) * star.distance + Math.cos(starAngle * 3) * star.armOffset;
        star.y = galaxyCenter.current.y + Math.sin(starAngle) * star.distance + Math.sin(starAngle * 3) * star.armOffset;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
        gradient.addColorStop(0, `rgba(${star.color}, ${star.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${star.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}