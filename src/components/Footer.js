import React from "react";

export default function Footer() {
  return (
    <footer className="academy-footer px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black text-[var(--ink)]">
            International Youth AI Community
          </p>
          <p className="mt-1 text-xs text-[var(--ink-2)]">
            Firebase-powered results, recruitment and GitHub-first project collaboration.
          </p>
        </div>

        <p className="font-mono text-xs text-[var(--ink-3)]">
          React · Firebase · Netlify · GitHub OAuth
        </p>
      </div>
    </footer>
  );
}
