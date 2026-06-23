import React, { useEffect } from "react";

export default function Modal({
  open,
  title,
  children,
  onClose,
  width = "max-w-2xl"
}) {
  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="academy-modal-backdrop" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`academy-modal modal-scroll w-full ${width}`}
        onClick={event => event.stopPropagation()}
      >
        <div className="academy-modal-header">
          <h3 id="modal-title">{title}</h3>

          <button type="button" onClick={onClose}>
            关闭
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
