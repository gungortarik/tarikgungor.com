import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Tarik Gungor — Crafted systems. Continuous learning.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const wordmarkBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/logos/tarik-gungor-wordmark.png")
  );
  const wordmarkBase64 = `data:image/png;base64,${wordmarkBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f5f0",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#1a1917",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <img
            src={wordmarkBase64}
            alt="Tarik Gungor"
            style={{ height: "44px", width: "166px", objectFit: "contain" }}
          />
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5c5850",
            }}
          >
            Toronto, Canada
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Crafted systems.
          </div>
          <div style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Continuous learning.
          </div>
          <div style={{ fontSize: "20px", color: "#0d9488", marginTop: "8px" }}>
            Open to co-op opportunities
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(26, 25, 23, 0.1)",
            paddingTop: "24px",
            fontSize: "14px",
            color: "#5c5850",
          }}
        >
          <span>IT · Systems · Software</span>
          <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#8a857c" }}>
            tarikgungor.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
