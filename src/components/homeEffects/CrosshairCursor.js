import React, { useEffect, useRef } from "react";

export default function CrosshairCursor() {
  const verticalRef = useRef(null);
  const horizontalRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    function handleMove(event) {
      const x = event.clientX;
      const y = event.clientY;

      if (verticalRef.current) {
        verticalRef.current.style.transform = `translateX(${x}px)`;
      }

      if (horizontalRef.current) {
        horizontalRef.current.style.transform = `translateY(${y}px)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div ref={verticalRef} className="crosshair-line crosshair-vertical" />
      <div ref={horizontalRef} className="crosshair-line crosshair-horizontal" />
      <div ref={dotRef} className="crosshair-dot" />
    </>
  );
}
