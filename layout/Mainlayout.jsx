import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Mainlayout(props) {
  return (
    <div style={{ background: "#f1f0ec" }}>
      <div className="d-flex vstack gap-3">
        <Navbar />
        {props.children}
        <br />
        <Footer />
        <br />
      </div>
    </div>
  );
}
