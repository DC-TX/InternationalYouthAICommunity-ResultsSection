import React from "react";

export default function Modal({
  open,
  title,
  children,
  onClose,
  width = "max-w-2xl"
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/30 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`modal-scroll w-full ${width} rounded-xl border border-line bg-white p-6 shadow-soft`}
        onClick={event => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-line pb-4">
          <h3 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-ink">
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-line px-3 py-1.5 text-sm text-mute hover:bg-paper hover:text-ink"
          >
            关闭
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
