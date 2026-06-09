import React from "react";

export default function Modal({ open, title, children, onClose, width = "max-w-2xl" }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`modal-scroll w-full ${width} rounded-3xl border border-white/10 bg-[#111122] p-6 shadow-2xl`}
        onClick={event => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-black text-white">{title}</h3>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-3 py-2 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
