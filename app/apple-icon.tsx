import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0e0b08 0%,#352717 50%,#705431 100%)",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 40 40" fill="none">
          <path
            d="M4 6 L20 34 L36 6"
            stroke="#d8c2a5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="2.8" fill="#d8c2a5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
