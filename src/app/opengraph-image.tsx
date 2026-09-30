import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ogImageAlt } from "@/lib/site";

export const alt = ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accent = "#b7c87c";

const montserratMedium = await readFile(join(process.cwd(), "assets/fonts/Montserrat-500.ttf"));
const montserratBold = await readFile(join(process.cwd(), "assets/fonts/Montserrat-700.ttf"));

const tagline =
  "WhatsApp-first systems for clinics, pharmacies, hotels and service businesses across East Africa.";

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
          background: "#12140f",
          padding: "72px 80px",
          color: "#f2f2ea",
          fontFamily: "Montserrat",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
            <path d="M50 6C50 6 58 34 50 50C42 34 50 6 50 6Z" fill={accent} />
            <path d="M94 50C94 50 66 58 50 50C66 42 94 50 94 50Z" fill={accent} />
            <path d="M50 94C50 94 42 66 50 50C58 66 50 94 50 94Z" fill={accent} />
            <path d="M6 50C6 50 34 42 50 50C34 58 6 50 6 50Z" fill={accent} />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 92, fontWeight: 700, letterSpacing: "0.04em" }}>
              NUMENA
            </span>
            <span
              style={{
                fontSize: 32,
                fontWeight: 500,
                letterSpacing: "0.45em",
                color: "#b3b7aa",
                marginTop: 14,
              }}
            >
              LABS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 4, background: accent, marginBottom: 28 }} />
          <span style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.3, maxWidth: 1000 }}>
            {tagline}
          </span>
          <span style={{ fontSize: 24, fontWeight: 500, color: "#b3b7aa", marginTop: 20 }}>
            Eldoret, Kenya
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: montserratMedium, style: "normal", weight: 500 },
        { name: "Montserrat", data: montserratBold, style: "normal", weight: 700 },
      ],
    },
  );
}
