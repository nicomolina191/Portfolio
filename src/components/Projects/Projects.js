import React from 'react';
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from '../ProjectCard/ProjectCard.js';
import socialsound from '../../assets/socialsound.png';
import videogames from '../../assets/videogames.png';
import NextProjects from '../../assets/coming-soon.gif';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import style from './Projects.module.css';

export const Projects = () => {
	const projects = [
		{
			title: 'Videogames-App',
			description: 'Proyecto que brinda información detallada acerca de videojuegos.',
			imgUrl: videogames,
			url: 'https://videogames-app-nicomolina.vercel.app/',
		},
		{
			title: 'Social Sound',
			description: 'Red social destinada a ayudar a artistas musicales que están comenzando su carrera.',
			imgUrl: socialsound,
			url: 'https://www.socialsound.art/',
		},
		{
			title: 'Muy pronto!',
			description: '',
			imgUrl: NextProjects,
		},
	];

	return (
		<section className={style.project} id='project'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({isVisible}) => (
								<div>
									<h2 className={style.title}>Proyectos</h2>
									<p className={style.text}>
										Aquí puedes ver los proyectos en los que trabajé y en los que estoy trabajando.
										<br></br>
									</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav
											variant='pills'
											className={style.nav}
											id='pills-tab'
										>
											<Nav.Item className={style.item}>
												<Nav.Link eventKey='first' className={style.link}>1</Nav.Link>
											</Nav.Item>
											<Nav.Item className={style.item}>
												<Nav.Link eventKey='second' className={style.link}>2</Nav.Link>
											</Nav.Item>
											<Nav.Item className={style.item}>
												<Nav.Link eventKey='third' className={style.link}>3</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id='slideInUp'>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey='second'>
												<p className={style.panel}>Muy pronto!</p>
											</Tab.Pane>
											<Tab.Pane eventKey='third'>
												<p className={style.panel}>Muy pronto!</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
