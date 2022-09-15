import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function about() {
  return (
    <Mainlayout>
      <div className="d-flex mx-auto align-item-center vstack gap-2 py-5">
        <img src="/pic/Pic1.jpg" width="auto" height="400px" />
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div
          className="d-flex mx-auto align-item-center vstack gap-2 py-5"
          style={{ maxWidth: "700px", fontFamily: "Quicksand" }}
        >
          <span className="h2 mx-auto fw-bold">about me</span>
          <span style={{ maxWidth: "1000px" }} className="mx-auto">
            Hi, everyone. I'm Kritanon Suntabut or you can call me "Non". I'm 20
            years old. I'm studying in Computer Engineering, Chiang Mai
            University. I’m interested in programming when i was in high school,
            so I decided to study Computer programming. For my personality, I’m
            kind of a very friendly person.
          </span>
        </div>
      </div>

      <div style={{ fontFamily: "Quicksand" }}>
        <div
          className="d-flex mx-auto align-text-center hstack gap-4"
          style={{ maxWidth: "1100px" }}
        >
          <img
            src="pic/school.jpg"
            style={{ width: "400px", height: "auto" }}
            className="me-auto"
          />
          <div style={{ background: "whitesmoke" }}>
            <div
              className="vstack gap-1"
              style={{
                paddingLeft: "120px",
                paddingRight: "130px",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <span className="h3 fw-bold" style={{ fontSize: "20px" }}>
                Education
              </span>
              <span>Middle school : Sirimart Thevi School</span>
              <span>High school : Samakkhi Witthayakhom School </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: "Quicksand" }}>
        <div
          className="d-flex mx-auto align-text-center hstack gap-4"
          style={{ maxWidth: "1100px" }}
        >
          <div style={{ background: "whitesmoke" }}>
            <div
              className="vstack gap-1"
              style={{
                paddingLeft: "150px",
                paddingRight: "150px",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <span className="h3 fw-bold" style={{ fontSize: "20px" }}>
                My skill
              </span>
              <span>Programming Language : C++ , Java , Javascript </span>
              <span>Other skill : Video Editing , Photo Editing </span>
            </div>
          </div>

          <img
            src="pic/computer.jpg"
            style={{ width: "400px", height: "auto" }}
            className="ms-auto"
          />

          <br />
        </div>
      </div>
    </Mainlayout>
  );
}
