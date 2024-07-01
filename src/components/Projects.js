import { Container, Row, Col,  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "Machine Learning",
      imgUrl: projImg1,
      link :"https://github.com/TejeshSana/heart-disease-risk-assessment"
    },
    {
      title: "PortFolio",
      description: "Web Design & Development",
      imgUrl: projImg2,
      link :"https://personal-portfolio-52tkwblgf-tejeshsanas-projects.vercel.app/"
    },
    {
      title: "Snake Game",
      description: "Python Application",
      imgUrl: projImg3,
      link :"https://github.com/TejeshSana/snakeGame-python"
    },
    {
      title: "Quiz App",
      description: "Web Application",
      imgUrl: projImg4,
      link :"https://github.com/TejeshSana/quiz_app"
    },
    {
      title: "AI Chat Bot",
      description: "Artificial Intelligence(AI)",
      imgUrl: projImg5,
      link :"https://github.com/TejeshSana/AI-chatbot"
    },
    {
      title: "Money Tracker",
      description: "Web Application",
      imgUrl: projImg6,
      link :"https://money-tracker-dlir5lacf-tejeshsanas-projects.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="back"/>
    </section>
  )
}
