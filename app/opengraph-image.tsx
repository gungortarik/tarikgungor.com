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
          backgroundColor: "#f3f1ec",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#141312",
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
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6b6560",
            }}
          >
            Vaughan · Systems · Software
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "56px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Crafted systems.
          </div>
          <div style={{ fontSize: "56px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Continuous learning.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(20, 19, 18, 0.1)",
            paddingTop: "24px",
            fontSize: "14px",
            color: "#6b6560",
          }}
        >
          <span>IT · systems · software</span>
          <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#8f8880" }}>
            tarikgungor.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
