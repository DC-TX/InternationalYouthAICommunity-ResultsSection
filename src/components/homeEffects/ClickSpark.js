import React, { useEffect, useState } from "react";

export default function ClickSpark() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    function handleClick(event) {
      const createdAt = Date.now();
      const sparkItems = Array.from({ length: 12 }).map((_, index) => {
        const angle = (Math.PI * 2 * index) / 12;
        const distance = 28 + Math.random() * 26;

        return {
          id: `${createdAt}-${index}`,
          x: event.clientX,
          y: event.clientY,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance
        };
      });

      setSparks(prev => [...prev, ...sparkItems]);

      window.setTimeout(() => {
        setSparks(prev =>
          prev.filter(item => !sparkItems.some(spark => spark.id === item.id))
        );
      }, 650);
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="click-spark-layer" aria-hidden="true">
      {sparks.map(spark => (
        <span
          key={spark.id}
          className="click-spark"
          style={{
            left: spark.x,
            top: spark.y,
            "--dx": `${spark.dx}px`,
            "--dy": `${spark.dy}px`
          }}
        />
      ))}
    </div>
  );
}
