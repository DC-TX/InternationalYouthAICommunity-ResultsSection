import React, { useEffect, useRef } from "react";

export default function AnimatedContent({
  children,
  className = "",
  variant = "fade-up",
  delay = 0
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.classList.add("active");
          } else {
            node.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={`animated-content ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
