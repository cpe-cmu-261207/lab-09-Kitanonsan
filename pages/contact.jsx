import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function contact() {
  return (
    <Mainlayout>
      <div
        className="d-flex mx-auto align-item-center"
        style={{ maxWidth: "700px" }}
      >
        <div style={{ background: "whitesmoke" }}>
          <div
            className="d-flex mx-auto align-item-center p-5 vstack gap-4"
            style={{ maxWidth: "500px", fontFamily: "Quicksand" }}
          >
            <span
              className="mx-auto"
              style={{ fontFamily: "Kantumruy Pro", fontSize: "60px" }}
            >
              Contact me
            </span>
            <span>Name : Kritanon Suntabut</span>
            <span>Nickname : Non</span>
            <span style={{ width: "300px" }}>
              Adress : 196 Moo 1, Baan Rong Kod, Tantawan, Phan, Chiang Rai,
              57280
            </span>
            <span>Phone : 081-103-7806</span>
            <span>
              Email :
              <a href="mailto:kitanon_san@cmu.ac.th" rel="noreferrer">
                {" kitanon_san@cmu.ac.th"}
              </a>
            </span>
            <span>
              Facebook :
              <a
                href="https://web.facebook.com/profile.php?id=100008481457042"
                target="_blank"
                rel="noreferrer"
              >
                {" Kritanon Suntabut"}
              </a>
            </span>
            <br />
            <div
              className="d-flex mx-auto align-item-center hstack gap-5"
              style={{ maxWidth: "500px" }}
            >
              <a
                href="https://web.facebook.com/profile.php?id=100008481457042"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/pic/Facebook.png" width="40px" height="auto" />
              </a>
              <a
                href="https://www.instagram.com/_ktnon/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/pic/Instargram.png" width="40px" height="auto" />
              </a>
              <a
                href="https://line.me/ti/p/7zmkODaMuC"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/pic/Line.png" width="40px" height="auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
