import { colors } from "../public/utilities";
import { Space } from "antd";
import Link from "next/link";
export default function Header() {
  return (
    <Space
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: ".8rem 278px",
        position: "fixed",
        width: "100%",
        zIndex: "1",
        background: colors.DarkBlue,
      }}
    >
      <h1>LOGO</h1>
      <Space style={{ color: "green", fontSize: "1.5rem" }}>
        <Link href="/" style={{ color: "white", fontWeight: "700" }}>
          Home
        </Link>
        <Link href="/services" style={{ color: "white", fontWeight: "700" }}>
          Services
        </Link>
        <Link href="/blog" style={{ color: "white", fontWeight: "700" }}>
          Blog
        </Link>
        <Link href="/portfolio" style={{ color: "white", fontWeight: "700" }}>
          Portfolio
        </Link>
        <Link
          href="/"
          style={{
            color: "white",
            fontWeight: "700",
            borderRadius: "3rem",
            padding: "1rem",
            background: colors.CTA,
            marginLeft: "2rem",
          }}
        >
          Contact
        </Link>
      </Space>
    </Space>
  );
}
