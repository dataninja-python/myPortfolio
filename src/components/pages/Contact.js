import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function Contact() {
    return (
        <div>
            <h1 className='contact'>CONTACT</h1>
            <div>
                <form>
                    <input></input>
                    <Button buttonStyle='btn--outline'>Submit</Button>
                </form>
            </div>
        </div>
    );
};