import React from "react";

export default function AnimatedText({ text, className = "" }) {
  const parts = text.split(" ");

  return (
    <span className={`text-reveal ${className}`}>
      {parts.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{ "--i": index }}
          className="mr-[0.22em]"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
