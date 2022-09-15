import React from "react";
import Mainlayout from "../layout/Mainlayout";
import Activity from "../components/Activity";
import { projects } from "../lib/projects";

export default function activities() {
  projects;

  return (
    <Mainlayout>
      <div style={{ background: "#eaddca" }}>
        <div
          className="d-flex mx-auto align-item-center vstack gap-0"
          style={{
            maxWidth: "1000px",
            fontFamily: "Kantumruy Pro",
            color: "whitesmoke",
          }}
        >
          <span
            style={{
              fontSize: "150px",

              marginRight: "100px",
              marginBottom: "-00px",
            }}
          >
            Project
          </span>
          <span style={{ fontSize: "150px", marginLeft: "200px" }}>
            Experiences
          </span>
        </div>
      </div>
      {projects.map((x, i) => (
        <Activity name={x.name} detail={x.detail} src={x.src} key={i} />
      ))}
    </Mainlayout>
  );
}
