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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`modal-scroll w-full ${width} rounded-[1.75rem] border border-white/10 bg-[#080D1D]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)]`}
        onClick={event => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <h3
            id="modal-title"
            className="text-3xl font-black leading-tight tracking-[-0.04em] text-white"
          >
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            关闭
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
