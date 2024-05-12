import "./card.css";
import data from './data.json'
function Card() {

  return (
    <>
      {data.data.map((i) => {
        return (
          <div className="book" key={i.id}>
            <h3>{i.title}</h3>
            <p>{i.info}</p>
            <a href={i.url} target="_blamk">watching video</a>
            <div className="cover">
                <img src={i.img} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
