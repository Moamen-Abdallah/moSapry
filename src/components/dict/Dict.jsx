import "./dict.css";
// import video1 from "../../assets/videos/1.mp4";
import Card from "../card/Card";

function Dict() {
  return (
    <section className="projects">
      <h1 className="projects_title">Motion Projects</h1>
      <div className="container">
        <div className="project-row">
          {/* <div className="video">
            <video src={video1} autoPlay controls></video>
          </div> */}
          <div className="project-card">
               <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dict;
