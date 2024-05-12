import advan from "./advantage.json";
import "./advantage.css";
function Advantage() {
  const info = advan.motion;
  return (
    <section className="advantage">
      <h1 className="title">
        What distinguishes me <span style={{ color: "red" }}>?</span>
        <a href="#info" className="mouse"></a>
      </h1>
      <div className="container">
        <div className="row" id="info">
          {info.map((i) => (
            <div className="card_advantage" key={i.id}>
              <img src={i.img} alt="" />
              <h3>{i.title}</h3>
              <p>{i.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
