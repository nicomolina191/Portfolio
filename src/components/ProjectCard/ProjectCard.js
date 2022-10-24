import React from 'react';
import {Col} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import style from './ProjectCard.module.css';

export const ProjectCard = ({title, description, imgUrl, url}) => {
	return (
        <Col size={12} sm={6} md={4}>
			<Nav className='ms-auto'>
                <Nav.Link className={style.link} href={url} target='_blank'>
                    <div className={style.card}>
                        <img src={imgUrl} alt='' className={style.img}/>
                        <div className={style.content}>
                            <h4 className={style.title}>{title}</h4>
                            <span className={style.description}>{description}</span>
                        </div>
                    </div>
                </Nav.Link>
			</Nav>
		</Col>
	);
};
