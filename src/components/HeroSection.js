import React from 'react';
import { Button } from './Button';
import { ButtonServices } from './ButtonServices';
import './Button.css';
import '../App.css';
import './HeroSection.css';


export default function HeroSection () {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted ></video>
            <h1>Akpo 'AJ' Igherighe</h1>
            <p>Welcome to my portfolio site</p>
            <p className="tech-subtitle">Built with React, React Hooks, HTML, CSS, and JavaScript</p>
            <div className="hero-btns">
                    <ButtonServices id='hero-learn'  className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</ButtonServices>

                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Sign Up <i className="fa fa-envelope" aria-hidden="true"></i> </Button>
            </div>
        </div>
    )
};
