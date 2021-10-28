import { useState, useEffect } from 'react';
import { kelvinToFahrenheit } from '../hooks/kelvinToFahrenheit';
import DailyCard from './DailyCard';

const Glance = ({ weather, lat, long }) => {
    console.log(weather);
    return (
        <div className='home-div'>
            <h1 className='center'>Baltimiore City, MD</h1>

            <h3 className='center'>
                {kelvinToFahrenheit(weather.current.temp)}°
            </h3>
            <div className='grid'>
                {weather.daily.map((day, i) => (
                    <DailyCard key={i} id={i} day={day} />
                ))}
            </div>
        </div>
    );
};

export default Glance;
