import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg,#1a130b 0%,#523d24 55%,#b08a55 100%)",
          color: "#f5eee2",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: -3,
        }}
      >
        V
      </div>
    ),
    { ...size }
  );
}
