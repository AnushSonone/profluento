import { ImageResponse } from "next/og";

export const alt = "Profluento — AI-Powered CRM for Wealth Managers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#07090d", color: "#f5f7fa", padding: "72px", fontFamily: "sans-serif", border: "1px solid rgba(245,247,250,.14)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "34px", fontWeight: 700 }}>
        <div style={{ width: "42px", height: "42px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
          <span style={{ width: "16px", height: "16px", background: "#3b82f6" }} /><span style={{ width: "21px", height: "16px", background: "#f5f7fa" }} /><span style={{ width: "26px", height: "16px", background: "#3b82f6" }} /><span style={{ width: "11px", height: "16px", background: "#f5f7fa" }} />
        </div>
        Profluento
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "950px" }}>
        <span style={{ color: "#3b82f6", fontSize: "22px", letterSpacing: "3px" }}>AI-POWERED CRM FOR WEALTH MANAGERS</span>
        <div style={{ fontSize: "70px", fontWeight: 650, letterSpacing: "-3px", lineHeight: 1.05 }}>Turn professional signals into stronger client relationships.</div>
      </div>
      <div style={{ color: "#9ca3af", fontSize: "24px" }}>Lead intelligence · AI-assisted outreach · Relationship CRM</div>
    </div>,
    size,
  );
}
