import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../assets/text.gif';
import navIcon1 from '../../assets/linkedin.svg';
import navIcon2 from '../../assets/github.svg';
import style from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} sm={6}>
						<img src={logo} alt='Logo' className={style.img} />
					</Col>
					<Col size={12} sm={6} className='text-center text-sm-end'>
						<div className='social-icon'>
                            <a href='https://www.linkedin.com/in/nico-molina191/' target="_blank">
								<img src={navIcon1} alt='' />
							</a>
							<a href='https://github.com/nicomolina191' target="_blank">
								<img src={navIcon2} alt='' />
							</a>
						</div>
						<p className={style.text}>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
