import React, { useEffect, useRef } from 'react';

const FondoInteractivo = () => {
  const canvasRef = useRef(null);
  const snowflakesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 100 });
  const animationRef = useRef(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = document.documentElement.scrollHeight;

    const colors = ['#ffffff', '#e0aaff', '#c77dff', '#b8a0ff'];
    const snowflakeCount = 150;

    class Snowflake {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.3;
        this.size = Math.random() * 4 + 1;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.6 + 0.4;
        this.swing = Math.random() * 0.5;
        this.swingSpeed = Math.random() * 0.02 + 0.01;
        this.angle = 0;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.blur = Math.random() > 0.7;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.swingSpeed;
        this.x += Math.sin(this.angle) * this.swing + this.speedX;
        this.rotation += this.rotationSpeed;

        const mouse = mouseRef.current;
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 5;
            this.y -= Math.sin(angle) * force * 5;
          }
        }

        // Reiniciar al llegar abajo
        if (this.y > height + 10) {
          this.y = -10;
          this.x = Math.random() * width;
          this.speedY = Math.random() * 1.5 + 0.5;
        }

        // Mantener dentro del ancho
        if (this.x > width + 10) this.x = -10;
        if (this.x < -10) this.x = width + 10;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        if (this.blur) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        }

        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        const spikes = 6;
        const outerRadius = this.size;
        const innerRadius = this.size / 2;

        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (i * Math.PI) / spikes;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = this.opacity * 0.8;
        ctx.fill();

        ctx.restore();
      }
    }

    const initSnowflakes = () => {
  snowflakesRef.current = [];
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = new Snowflake();
    // Posición inicial y aleatoria para que caigan de forma escalonada
    snowflake.y = Math.random() * height * 1.5 - height * 0.5; // Valores entre -height/2 y height
    snowflakesRef.current.push(snowflake);
  }
};


    const drawConnections = () => {
      const snowflakes = snowflakesRef.current;
      for (let i = 0; i < snowflakes.length; i++) {
        for (let j = i + 1; j < snowflakes.length; j++) {
          const dx = snowflakes[i].x - snowflakes[j].x;
          const dy = snowflakes[i].y - snowflakes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = `rgba(192, 160, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(snowflakes[i].x, snowflakes[i].y);
            ctx.lineTo(snowflakes[j].x, snowflakes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a0014');
      gradient.addColorStop(0.5, '#1a002b');
      gradient.addColorStop(1, '#0a0014');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      snowflakesRef.current.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });

      drawConnections();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const MAX_CLICK_SNOWFLAKES = 50; // máximo de copos por clicks en un intervalo
    let clickSnowflakesCount = 0;

    // Reiniciar contador cada 2 segundos
    setInterval(() => {
      clickSnowflakesCount = 0;
    }, 2000);

    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calcular cuántos copos se pueden agregar ahora
      const remaining = MAX_CLICK_SNOWFLAKES - clickSnowflakesCount;
      const toAdd = Math.min(15, remaining);
      if (toAdd <= 0) return;

      for (let i = 0; i < toAdd; i++) {
        const snowflake = new Snowflake();
        snowflake.x = x + (Math.random() - 0.5) * 50;
        snowflake.y = y + (Math.random() - 0.5) * 50;
        snowflake.speedY = Math.random() * 3 + 1;
        snowflake.size = Math.random() * 6 + 2;
        snowflakesRef.current.push(snowflake);
      }

      clickSnowflakesCount += toAdd;
    };


    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight;
      initSnowflakes();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    initSnowflakes();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default FondoInteractivo;
