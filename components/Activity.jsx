import React from "react";

export default function Activitie(props) {
  return (
    <div
      className="d-flex mx-auto align-items-center hstack gap-5"
      style={{ maxWidth: "1100px" }}
    >
      <img src={props.src} width="400px" height="auto" />
      <div
        style={{
          fontFamily: "Quicksand",
          fontSize: "20px",
          paddingTop: "50px",
        }}
        className="d-flex vstack gap-2"
      >
        <span className="h4 fw-bold">{props.name}</span>
        <span style={{ fontSize: "17px" }}>{props.detail}</span>
      </div>
    </div>
  );
}
