import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

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
          background: "#f4f0e8",
          color: "#141413",
          borderRadius: "50%",
          border: "2px solid #141413",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        TG
      </div>
    ),
    {
      ...size,
    }
  );
}
