import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import github from '../../assets/github-blue.svg';
import react from '../../assets/react.svg';
import js from '../../assets/javascript.svg';
import express from '../../assets/express.svg';
import redux from '../../assets/redux.svg';
import nodejs from '../../assets/nodejs.svg';
import postgres from '../../assets/pgsql.svg';
import css from '../../assets/css.svg';
import html from '../../assets/html.svg';
import style from './Skills.module.css';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: {max: 4000, min: 3000},
			items: 5,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	};

	return (
		<section className={style.skill} id='skills'>
			<div className={style.container}>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2 className={style.title}>Habilidades</h2>
							<p className={style.text}>
								Estas son algunas de las tecnologías con las que trabajé, pueden
                                variar ya que voy aprendiendo a utilizar otras nuevas.<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className='owl-carousel owl-theme skill-slider'
							>
								<div>
									<img src={js} alt='' className={style.img}/>
									<h5 className={style.name}>JavaScript</h5>
								</div>
								<div>
									<img src={html} alt='' className={style.img}/>
									<h5 className={style.name}>HTML</h5>
								</div>
								<div>
									<img src={css} alt='' className={style.img}/>
									<h5 className={style.name}>CSS</h5>
								</div>
								<div>
									<img src={react} alt='' className={style.img}/>
									<h5 className={style.name}>React</h5>
								</div>
								<div>
									<img src={nodejs} alt='' className={style.img}/>
									<h5 className={style.name}>Node JS</h5>
								</div>
								<div>
									<img src={redux} alt='' className={style.img}/>
									<h5 className={style.name}>Redux</h5>
								</div>
								<div>
									<img src={express} alt='' className={style.img}/>
									<h5 className={style.name}>Express JS</h5>
								</div>
								<div>
									<img src={postgres} alt='' className={style.img}/>
									<h5 className={style.name}>PostgreSQL</h5>
								</div>
								<div>
									<img src={github} alt='' className={style.img}/>
									<h5 className={style.name}>GitHub</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
