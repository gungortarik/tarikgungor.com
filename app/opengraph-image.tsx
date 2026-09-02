import { ImageResponse } from "next/og";

export const alt = "Tarik Gungor — Building. Learning. Living.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f0e8",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#141413",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "2px solid #141413",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "-0.04em",
              }}
            >
              TG
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Tarik Gungor
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#686660",
            }}
          >
            <span>Toronto, Canada</span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#141413",
            }}
          >
            Building systems.
          </div>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#141413",
            }}
          >
            Learning continuously.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            <span
              style={{
                color: "#78764e",
                fontStyle: "italic",
                marginRight: "14px",
              }}
            >
              Living
            </span>
            <span style={{ color: "#141413" }}>intentionally.</span>
          </div>
        </div>

        {/* Bottom Technical Footer / Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #e0dacf",
            paddingTop: "24px",
            fontSize: "15px",
            color: "#686660",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#78764e" }}>&lt;/&gt;</span>
            <span>Technology • Systems • Learning</span>
          </div>
          <span>tarikgungor.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
