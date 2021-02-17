import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join my newsletter 'The Adventures of PseudoCodeus: The Data Science, Software Developer Ninja.' Follow me as I dive into the fundamentals of computer science, programming, machine learning, AI, as well as cutting edge technologies, the latest languages/packages and frameworks
                </p>
                <p className="footer-subscription-text">
                    This newsletter should be informative, non-intrusive, and respect your privacy. Also, entertaining, funny, and thought-provoking - but I'm no Dave Chappelle or Neil DeGrasse Tyson so let's lower those expectations. We all hate spam. So, unsubscribing is as easy as 1 click
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                    </form>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/services'>Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social</h2>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Github'><i className='fab fa-github' /></Link>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'><i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to='/'
                        target='_blank' aria-label='Instagram'><i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'><i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-link twitter' to='/'
                        target='_blank' aria-label='Twitter'><i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-link twitter' to='/'
                        target='_blank' aria-label='LinkedIn'><i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}