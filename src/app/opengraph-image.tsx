import { ImageResponse } from "next/og";

export const alt = "Deep Patel — Software Engineering Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b1120",
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(45,212,191,0.15), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#94a3b8",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#2dd4bf",
            }}
          />
          Brisbane, Australia
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 110,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-0.03em",
          }}
        >
          Deep Patel
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 48,
            fontWeight: 600,
            color: "#2dd4bf",
          }}
        >
          Software Engineering Graduate
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#cbd5e1",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Building practical tools across software, data, automation,
          geospatial systems, and AI.
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: "16px",
          }}
        >
          {["Python", "TypeScript", "React", "Django", "PostGIS", "ML"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 24px",
                  borderRadius: 9999,
                  border: "1px solid #334155",
                  backgroundColor: "rgba(30,41,59,0.6)",
                  color: "#cbd5e1",
                  fontSize: 26,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
