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
          background: "#111312",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "#8ee3b4",
              color: "#0b2a1a",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            U
          </div>
          {profile.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, color: "#a1a9a4", fontWeight: 300 }}>{profile.heroLead}</div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.heroHighlight}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8ee3b4" }}>
          Web apps · REST APIs · AI integrations
        </div>
      </div>
    ),
    size,
  );
}
