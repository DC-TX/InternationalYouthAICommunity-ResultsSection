import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleMove(event) {
      node.style.transform = `translate3d(${event.clientX - 140}px, ${event.clientY - 140}px, 0)`;
      node.style.opacity = "1";
    }

    function handleLeave() {
      node.style.opacity = "0";
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}
