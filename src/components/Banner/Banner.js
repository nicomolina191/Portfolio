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
                                            Soy de C??rdoba, Argentina y tengo 27 a??os. Soy T??cnico en Mantenimiento y Reparaci??n
                                            de Computadoras, profesi??n la cual ejerc?? durante varios a??os, hasta que descubr?? la
                                            programaci??n y qued?? fascinado con todo lo que pod??a hacer con ella. Es por eso que 
                                            decidi cursar el bootcamp de Henry. Luego de 5 meses de estudio, y aprendizaje de 
                                            nuevas tecnologias, pude terminar dicho curso y puedo decir orgulloso que soy 
                                            Full Stack Web Developer.
                                            <br></br>
                                            Actualmente busco crecer como programador, adquiriendo conocimientos y aprendiendo el
                                            uso de nuevas tecnolog??as. Me motiva la creaci??n de nuevos proyectos y poder aportar
                                            mis conocimiento a la realizaci??n de los mismos.
                                            <br></br>
                                            Aqu?? vas a poder visualizar los proyectos en los que trabaj?? y mis habilidades t??cnicas.
                                            Si quieres saber mas de m?? o preguntarme algo, no dudes en ponerte en contacto conmigo.
                                        </p>
                                        <HashLink to='#connect'>
                                            <button className={style.contact}>
                                                <span>
                                                    Cont??ctame
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
