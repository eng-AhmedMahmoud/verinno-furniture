import { ImageResponse } from "next/og";

export const alt = "Verinno Furniture — Timeless interiors since 1994";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg,#1a130b 0%,#352717 40%,#705431 100%)",
          color: "#f5eee2",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#b08a55",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "#1a130b",
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, letterSpacing: 6 }}>VERINNO</span>
            <span style={{ fontSize: 16, letterSpacing: 4, color: "#c4a378" }}>FURNITURE · EST. 1994</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1 style={{ fontSize: 84, lineHeight: 1.05, margin: 0, maxWidth: 900 }}>
            Furniture that outlives trends.
          </h1>
          <p style={{ fontSize: 28, color: "#d8c2a5", margin: 0, maxWidth: 900 }}>
            Supreme-quality home, hotel & office interiors crafted in Egypt for 30 years.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#c4a378", letterSpacing: 3 }}>
          <span>MAADI · MOHANDESEEN · MALL OF ARABIA · 6TH OCTOBER</span>
          <span>VERINNO.COM</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
