import React from "react";

export default function FloatingLines() {
  const lines = Array.from({ length: 22 });

  return (
    <div className="floating-lines" aria-hidden="true">
      {lines.map((_, index) => (
        <span
          key={index}
          className="floating-line"
          style={{
            "--x": `${(index * 7) % 100}%`,
            "--delay": `${index * 0.55}s`,
            "--duration": `${9 + (index % 7)}s`,
            "--height": `${90 + (index % 6) * 42}px`,
            "--opacity": `${0.16 + (index % 5) * 0.035}`
          }}
        />
      ))}
    </div>
  );
}
