import React from "react";

export default function SplitText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <span className={`split-text ${className}`}>
      {words.map((word, index) => (
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
