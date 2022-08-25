import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useNavigate } from "react-router-dom"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Galaxies","Nebulas","Death Stars?"]
    const [text,setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000;
    const navigate = useNavigate();
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
                        <h1>{`Connect with me at the nearest `}<span className="wrap">{text}</span></h1>
                        <button onClick={() => navigate(-1)}>Let's Go Home<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}