import './hero.css'
import hero_img from '../../assets/2.png'
import Icon from "../icon/Icon";
import { Typewriter } from 'react-simple-typewriter';


function Hero() {


  return (
    <main className="hero_section">
      <div className="container">
        <div className="row">
          <div className="sidebar">
            <div className="info">
              <h2>
                <Typewriter
                  words={["Motion Graphic"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                />
              </h2>
              <h1>Designer</h1>

              <p>
                <Typewriter
                  words={[" I help entrepreneurs and companies tell their  stories Attractive and influential through high-quality animation"]}
                  cursorStyle="|"
                  typeSpeed={50}
                />
               
              </p>
            </div>
            <div className="icon">
              <Icon />
            </div>
          </div>
          <div className="main-content">
            <img src={hero_img}></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero