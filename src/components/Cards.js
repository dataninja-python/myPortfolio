import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Work Examples</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text='To-Do App - Second Django Attempt' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-2.jpg" text='Polling App - My First Django Project' label='Project' path='/services'></CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text='Magic Meme Ball App' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-2.jpg" text='Simple Trivia App With Jeopardy API' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-2.jpg" text='A Data Science Capstone - 2017' label='Project' path='/services'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
