import React from "react";

export default function QuietGrid({ children, className = "" }) {
  return <section className={`quiet-grid ${className}`}>{children}</section>;
}
