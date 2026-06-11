import React, { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]#$";

export default function DecryptText({ text, speed = 26, className = "" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const total = text.length;
    const timer = setInterval(() => {
      const output = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < frame) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(output);
      frame += 1;

      if (frame > total) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span className={`decrypt-text ${className}`}>{display}</span>;
}
