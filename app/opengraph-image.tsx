import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Tarik Gungor — Systems, tools, and the path between them.";
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
          backgroundColor: "#141413",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#f3f1ec",
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
            style={{
              height: "44px",
              width: "166px",
              objectFit: "contain",
              filter: "invert(1)",
            }}
          />
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9a968e",
            }}
          >
            Public field system
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "900px" }}>
          <div style={{ fontSize: "48px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.035em" }}>
            Building systems by day.
          </div>
          <div style={{ fontSize: "48px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.035em" }}>
            Building tools for real problems.
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#d4652f",
            }}
          >
            Documenting the path.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(243, 241, 236, 0.16)",
            paddingTop: "24px",
            fontSize: "14px",
            color: "#9a968e",
          }}
        >
          <div>Vaughan · IT · Systems study · Building</div>
          <div style={{ color: "#d4652f" }}>tarikgungor.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
