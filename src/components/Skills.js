import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                            The moment is almost here. NASA is about to launch its next-generation rocket for the first time and send it hurtling out beyond the Moon. It’s going to be a wild time, but honestly, there’s been a lot going on here on Earth, too — and if you’re anything like me, you might be in the market for a quick refresher on what exactly is going down when NASA’s next big thing blasts off.

                            Consider this your SLS cheat sheet as NASA gears up for its big launch on August 29th.

                            WHAT IS SLS?
                            It stands for Space Launch System.

                            That seems like a very boring name.
                            </p>
                            <Carousel responsive={responsive} infitine={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"></img>
                                    <h5>People who love space</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"></img>
                                    <h5>People who are willing to go to space</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"></img>
                                    <h5>People who enjoy space fiction</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"></img>
                                    <h5>Deep space.</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
}