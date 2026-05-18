import { useRef } from 'react';
import "./Button.css"
export default function MagneticButton({ children, onClick, className = '' }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const maxMove = 10;
    const moveX = Math.max(-maxMove, Math.min(maxMove, x));
    const moveY = Math.max(-maxMove, Math.min(maxMove, y));

    btn.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
  };

  return (
    <a
      ref={btnRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  );
}