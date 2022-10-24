import React from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import contactImg from '../../assets/contact.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import style from './Contact.module.css';

export const Contact = () => {
	const formInitialDetails = {
		name: '',
		last: '',
		email: '',
		message: '',
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Enviar');
	const [status, setStatus] = useState({});
	const [result, setResult] = useState(0);

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setButtonText('Enviando...');

		emailjs
			.sendForm(
				'service_dv2ts9d',
				'template_g7o51zj',
				e.target,
				'JuQyQrZ6q1SL-ZFTn'
			)
			.then(
				function (response) {
					setResult(200);
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					setResult(500);
					console.log('FAILED...', error);
				}
			);

		setButtonText('Enviar');

		setFormDetails(formInitialDetails);

		if (result === 200 || result === 0) {
			setStatus({succes: true, message: 'El mensaje se envió correctamente.'});
		} else {
			setStatus({
				succes: false,
				message: 'Algo salió mal, por favor intenta más tarde.',
			});
		}
	};

	return (
		<section className={style.contact} id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({isVisible}) => (
								<img
									src={contactImg}
									alt='Contáctame'
                                    className={style.img}
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({isVisible}) => (
								<div>
									<h2 className={style.title}>Enviá tu mensaje</h2>
									<form onSubmit={sendEmail}>
										<Row>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='text'
													value={formDetails.name}
													name="name"
													placeholder='Nombre'
                                                    className={style.input}
													onChange={(e) =>
														onFormUpdate('name', e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={6} className='px-1'>
												<input
													type='text'
													value={formDetails.last}
													name='last'
													placeholder='Apellido'
                                                    className={style.input}
													onChange={(e) =>
														onFormUpdate('last', e.target.value)
													}
												/>
											</Col>
											<Col size={12} sm={8} className='px-1'>
												<input
													type='email'
													value={formDetails.email}
													name='email'
													placeholder='Dirección de email'
                                                    className={style.input}
													onChange={(e) =>
														onFormUpdate('email', e.target.value)
													}
												/>
											</Col>
                                            <Col size={12} sm={4} className='px-1'>
											<div></div>
											</Col>
											<Col size={12} sm={12} className='px-1'>
												<textarea
													rows='6'
													value={formDetails.message}
													name='message'
													placeholder='Mensaje'
                                                    className={style.input}
													onChange={(e) =>
														onFormUpdate('message', e.target.value)
													}
												></textarea>
												<button type='submit' className={style.btn}>
													<span className={style.btnText}>{buttonText}</span>
												</button>
											</Col>
											{status.message && (
												<Col>
													<p
														className={
															status.success === false ? 'danger' : 'success'
														}
                                                        style={{color: 'white'}}
													>
														{status.message}
													</p>
												</Col>
											)}
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
