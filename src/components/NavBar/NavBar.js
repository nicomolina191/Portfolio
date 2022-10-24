import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../../assets/text.gif';
import navIcon1 from '../../assets/linkedin.svg';
import navIcon2 from '../../assets/github.svg';
import { useState, useEffect } from 'react';
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};


    return (
        <Router>
            <Navbar className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href='#home'>
                        <img src={image} alt='Logo' className='navbar-img' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'>
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link
                            href='#home'
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                            >
                                Inicio
                            </Nav.Link>
                            <Nav.Link
                            href='#skills'
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                            >
                                Habilidades
                            </Nav.Link>
                            <Nav.Link
                            href='#project'
                            className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('project')}
                            >
                                Proyectos
                            </Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/nico-molina191/' target="_blank">
                                    <img src={navIcon1} alt='' />
                                </a>
                                <a href='https://github.com/nicomolina191' target="_blank">
                                    <img src={navIcon2} alt='' />
                                </a>
                            </div>
                            <HashLink to='#connect' className='button-connect'>
                                <button className='vvd'>
                                    <span>Contáctame</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
