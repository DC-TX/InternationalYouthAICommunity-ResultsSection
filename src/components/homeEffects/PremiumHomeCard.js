import React, { useRef } from "react";

export default function PremiumHomeCard({ children, className = "" }) {
  const ref = useRef(null);

  function handleMouseMove(event) {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`home-premium-card ${className}`}
    >
      <div className="home-premium-card-inner">{children}</div>
    </div>
  );
}
