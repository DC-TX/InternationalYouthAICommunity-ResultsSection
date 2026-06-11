import React, { useRef } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      <div className="spotlight-inner">{children}</div>
    </div>
  );
}
