import Link from "next/link";
import React from "react";

export default function Navbar() {
  const nameStyle = {
    textDecoration: "none",
    color: "black",
    fontFamily: "Lora",
    fontSize: "50px",
    marginLeft: "300px",
  };

  const navStyle = {
    textDecoration: "none",
    color: "black",
    fontFamily: "Lora",
  };

  return (
    <div style={{ background: "white" }}>
      <div
        className="d-flex align-items-center p-4"
        style={{
          width: "1250px",
          fontFamily: "Lora",
        }}
      >
        <Link href="/">
          <a className="me-auto fw-bold" style={nameStyle}>
            Kritanon
          </a>
        </Link>

        <div className="d-flex hstack gap-5" style={{ marginLeft: "200px" }}>
          <Link href="/">
            <a style={navStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={navStyle}>About</a>
          </Link>
          <Link href="/activities">
            <a style={navStyle}>Experience</a>
          </Link>
          <Link href="/contact">
            <a style={navStyle}>Contact</a>
          </Link>
          <Link href="/lab-07">
            <a style={navStyle}>Lab-07</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
