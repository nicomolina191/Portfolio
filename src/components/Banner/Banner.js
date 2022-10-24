import React from 'react';
import style from './Banner.module.css';
import avatar from '../../assets/perfil.jpg';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';


export const Banner = () => {


	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ['ull Stack Web Developer :)'];
	const period = 2000;

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text, delta]);



    return (
        <section className={style.banner} id='home'>
            <Router>
                <Container>
                    <Row className='aligh-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({isVisible}) => (
                                    <div className={ isVisible ? 'animate__animated animate__fadeIn' : '' }>
                                        <h1 className={style.title}>{`Hola! Soy Nico`}<br></br>
                                            <span
                                                className='txt-rotate'
                                                dataperiod='1000'
                                                data-rotate='[ "ull Stack Web Developer :)"]'
                                            >
                                                <span className={style.wrap}>{'F' + text}</span>
                                            </span>
                                        </h1>
                                        <br></br>
                                        <p className={style.text}>
                                            Soy de Córdoba, Argentina y tengo 27 años. Soy Técnico en Mantenimiento y Reparación
                                            de Computadoras, profesión la cual ejercí durante varios años, hasta que descubrí la
                                            programación y quedé fascinado con todo lo que podía hacer con ella. Es por eso que 
                                            decidi cursar el bootcamp de Henry. Luego de 5 meses de estudio, y aprendizaje de 
                                            nuevas tecnologias, pude terminar dicho curso y puedo decir orgulloso que soy 
                                            Full Stack Web Developer.
                                            <br></br>
                                            Actualmente busco crecer como programador, adquiriendo conocimientos y aprendiendo el
                                            uso de nuevas tecnologías. Me motiva la creación de nuevos proyectos y poder aportar
                                            mis conocimiento a la realización de los mismos.
                                            <br></br>
                                            Aquí vas a poder visualizar los proyectos en los que trabajé y mis habilidades técnicas.
                                            Si quieres saber mas de mí o preguntarme algo, no dudes en ponerte en contacto conmigo.
                                        </p>
                                        <HashLink to='#connect'>
                                            <button className={style.contact}>
                                                <span>
                                                    Contáctame
                                                </span>
                                            </button>
                                        </HashLink>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({isVisible}) => (
                                    <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                        <img src={avatar} alt='avatar' className={style.img} />
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </section>
    )
}
