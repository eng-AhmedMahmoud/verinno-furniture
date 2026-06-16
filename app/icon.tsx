import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#352717 0%,#705431 60%,#b08a55 100%)",
          color: "#f5eee2",
          fontSize: 38,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        V
      </div>
    ),
    { ...size }
  );
}
