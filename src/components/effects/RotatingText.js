import React, { useEffect, useState } from "react";

export default function RotatingText({ words = [], interval = 1800 }) {
  const [index, setIndex] = useState(0);
  const current = words[index % words.length];

  useEffect(() => {
    if (!words.length) return undefined;

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span key={current} className="rotating-word animate-[pageFade_420ms_ease_both]">
      {current}
    </span>
  );
}
