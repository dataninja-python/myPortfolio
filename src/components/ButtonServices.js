import React from 'react';
import './ButtonServices.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--outline', 'btn--primary', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonServices = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/services' className='btn-mobile'>
            <button className={`btn onClick={onClick} type={type}`}>
                {children}
            </button>
        </Link>
    );
};
