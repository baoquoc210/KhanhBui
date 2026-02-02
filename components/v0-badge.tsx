"use client";

import { useState } from "react";

export function V0Badge() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div>
      <div
        id="v0-built-with-button-2792e859-b571-465d-b479-f7ac3809dc6b"
        style={{
          border: "1px solid hsl(0deg 0% 100% / 12%)",
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "#121212",
          color: "white",
          padding: "8px 12px",
          borderRadius: 8,
          fontWeight: 400,
          fontSize: 14,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          letterSpacing: "0.02em",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        }}
      >
        <a
          href="https://v0.dev/chat/api/open/built-with-v0/b_TpNWqhYDTWr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          Built with
          <svg
            fill="currentColor"
            viewBox="0 0 40 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 20, height: 20 }}
          >
            <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z" />
            <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" />
          </svg>
        </a>

        <button
          onClick={() => setVisible(false)}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.7";
          }}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: 2,
            marginLeft: 4,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            opacity: 0.7,
            transition: "opacity 0.2s",
            transform: "translateZ(0)"
          }}
          aria-label="Close"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap"
          }}
        >
          v0
        </span>
      </div>
    </div>
  );
}

