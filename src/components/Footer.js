import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink">
            International Youth AI Community
          </p>
          <p className="mt-1 text-xs text-mute">
            Static demo focused on results, recruitment and GitHub integration.
          </p>
        </div>

        <p className="font-mono text-xs text-mute">
          React · Tailwind · GitHub-ready frontend
        </p>
      </div>
    </footer>
  );
}
