import { useState, useEffect } from 'react';
import DailyCard from './DailyCard';
import { kelvinToFahrenheit } from '../hooks/kelvinToFahrenheit';

const Glance = ({ weather, lat, long }) => {
    return (
        <div>
            <h1>{weather.timezone}</h1>

            <p>{kelvinToFahrenheit(weather.current.temp)}°</p>
            <div className='daily-grid'>
                {weather.daily.map((day, i) => (
                    <DailyCard key={i} id={i} day={day} />
                ))}
            </div>
        </div>
    );
};

export default Glance;
