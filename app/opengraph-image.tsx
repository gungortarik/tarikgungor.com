import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Tarik Gungor — Building. Learning. Living.";
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
          backgroundColor: "#f4f0e8",
          padding: "64px 72px",
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
          {/* Primary Brand Asset: Wordmark */}
          <img
            src={wordmarkBase64}
            alt="Tarik Gungor"
            style={{
              height: "44px",
              width: "166px",
              objectFit: "contain",
            }}
          />

          {/* Location Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5c5952",
            }}
          >
            <span>Toronto, Canada</span>
          </div>
        </div>

        {/* Center Main Positioning / Core Philosophy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#141413",
            }}
          >
            Building systems.
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: 1.15,
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
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            <span
              style={{
                color: "#7d7a54",
                fontStyle: "italic",
                marginRight: "14px",
              }}
            >
              Living
            </span>
            <span style={{ color: "#141413" }}>intentionally.</span>
          </div>
        </div>

        {/* Bottom Bar with Monogram as restrained secondary mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(20, 20, 19, 0.12)",
            paddingTop: "24px",
            fontSize: "14px",
            color: "#5c5952",
          }}
        >
          {/* Restrained Secondary Monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <svg
              width="26"
              height="22"
              viewBox="0 0 620 520"
              fill="none"
              style={{ opacity: 0.85 }}
            >
              <path
                d="M95.4141 195.02C80.1797 194.258 71.0391 190.449 71.0391 185.117C71.0391 174.453 103.031 156.934 136.547 143.223C183.773 124.18 242.426 108.184 301.84 103.613C319.359 102.09 334.594 102.09 342.211 103.613C344.496 104.375 345.258 105.898 343.734 108.184"
                stroke="#141413"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M242.426 126.465C224.145 158.457 205.863 192.734 187.582 227.012C166.254 267.383 147.211 305.469 130.453 341.27"
                stroke="#141413"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M267.562 197.305C250.805 179.785 224.906 180.547 202.055 198.066C176.156 218.633 164.73 246.055 169.301 268.145C173.871 290.234 195.199 300.137 220.336 293.281C243.949 287.187 265.277 272.715 287.367 253.672"
                stroke="#141413"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M286.605 253.672C271.371 284.141 254.613 313.848 236.332 342.031C223.383 362.598 211.957 380.117 202.055 387.734C193.676 394.59 187.582 393.066 186.82 386.211C186.059 375.547 195.961 357.266 208.91 341.27C226.43 319.941 248.52 302.422 272.895 289.473C300.316 275.762 330.023 268.145 359.73 267.383C365.824 267.383 369.633 268.906 371.918 270.43"
                stroke="#141413"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ letterSpacing: "0.02em" }}>Building • Learning • Living</span>
          </div>

          <span
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              letterSpacing: "0.04em",
              color: "#8a867c",
            }}
          >
            tarikgungor.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
