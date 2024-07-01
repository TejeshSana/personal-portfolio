import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import meter10 from "../assets/img/meter10.svg";
import meter11 from "../assets/img/meter11.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Html" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="NodeJs" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="ReactJs" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="C++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Python" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="back" />
    </section>
  )
}
