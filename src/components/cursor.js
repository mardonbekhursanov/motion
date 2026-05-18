import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const borderRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const borderPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Sichqoncha harakatini kuzatish
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // 2. Silliq quvish animatsiyasi (Lerp)
    let animationFrameId;
    const updatePosition = () => {
      const speed = 0.1; 
      borderPos.current.x += (mouse.current.x - borderPos.current.x) * speed;
      borderPos.current.y += (mouse.current.y - borderPos.current.y) * speed;

      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderPos.current.x}px, ${borderPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // 3. Hover effektini boshqarish
    const handleMouseEnter = () => {
      dotRef.current?.classList.add('is-hovered');
      borderRef.current?.classList.add('is-hovered');
    };

    const handleMouseLeave = () => {
      dotRef.current?.classList.remove('is-hovered');
      borderRef.current?.classList.remove('is-hovered');
    };

    // Sahifadagi barcha link, tugma va maxsus '.hover-target' klassli elementlarni topamiz
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hodisalarni tinglashni boshlash
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    // Tozalash (Cleanup)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor"></span>
      <div ref={borderRef} className="cursor-border"></div>
    </>
  );
}