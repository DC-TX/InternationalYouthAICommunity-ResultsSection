import React, { useRef } from "react";

export default function PremiumCard({ children, className = "" }) {
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
      className={`premium-card rounded-[2rem] ${className}`}
    >
      <div className="premium-card-inner">{children}</div>
    </div>
  );
}
