import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

export default function HeroSection () {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted ></video>
            <h1>Akpo 'AJ' Igherighe</h1>
            <p>Welcome to my portfolio site.</p>
            <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</Button>

                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Sign Up <i className="fa fa-envelope" aria-hidden="true"></i> </Button>
            </div>
        </div>
    )
};
