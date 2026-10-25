import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0c0a09",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#2dd4bf", letterSpacing: 4 }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 44, color: "#a8a29e", marginTop: 12 }}>{profile.role}</div>
          <div style={{ fontSize: 30, color: "#a8a29e", marginTop: 32 }}>
            Python · Django · Next.js · React · PostgreSQL
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#78716c" }}>{profile.location}</div>
      </div>
    ),
    size,
  );
}
