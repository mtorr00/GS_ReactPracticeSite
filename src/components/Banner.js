import {useState,useEffect} from 'react'

import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["pocket book","mom's spaghetti","homemade chili"]
    const [text,setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText=isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length+1)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum +1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to the React Playground</span>
                        <h1>{`Oops, you dropped your `}<span className="wrap">{text}</span></h1>
                        <p>The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}