import React from "react";

export default function BlurText({
  text,
  className = "",
  delay = 0,
  split = "word"
}) {
  const parts = split === "char" ? text.split("") : text.split(" ");

  return (
    <span className={`blur-text ${className}`}>
      {parts.map((part, index) => (
        <span
          key={`${part}-${index}`}
          className="blur-text-item"
          style={{
            "--i": index,
            "--base-delay": `${delay}ms`
          }}
        >
          {part === " " ? "\u00A0" : part}
          {split === "word" && index !== parts.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
