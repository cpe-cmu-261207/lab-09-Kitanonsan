import Mainlayout from "../layout/Mainlayout";

export default function Home() {
  return (
    <Mainlayout>
      <div style={{ background: "#eaddca" }}>
        <div className="hstack gap-5">
          <div
            className="d-flex vstack gap-1 my-auto"
            style={{
              marginLeft: "230px",
              fontFamily: "Cardo",
              color: "white",
            }}
          >
            <span style={{ fontSize: "110px" }}> Bonjour ! </span>
            <span style={{ fontSize: "70px" }}> je m'appelle Non.</span>
          </div>

          <img
            src="/pic/Eiffel.webp"
            style={{ width: "auto", height: "800px" }}
          />
        </div>
      </div>
      <div
        className="d-flex mx-auto align-item-center"
        style={{ maxWidth: "1000" }}
      >
        <div style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "90px",
              fontFamily: "Kantumruy Pro",
              fontWeight: "200",
              color: "black",
            }}
          >
            Welcome
          </span>
        </div>
      </div>
    </Mainlayout>
  );
}
