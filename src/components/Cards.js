import React from 'react';
import { ExternalLink } from 'react-external-link'; 
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Work Examples</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text='To-Do App - Django Second Try' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-2.jpg" text='Polling App - Django First Try' label='Project'></CardItem>
                        {/* <details><a href="https://github.com/dataninja-python/polls-app">Click</a></details> */}
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img-5.jpg" text='FM Affiliate Marketing Site' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-6.jpg" text='Magic Meme Ball App' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-7.jpg" text='Simple Trivia App With Jeopardy API' label='Project' path='/services'></CardItem>
                        <CardItem src="images/img-8.jpg" text='A Data Science Capstone - 2017' label='Project' path='/services'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
