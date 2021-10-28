import { Link } from 'react-router-dom';
import React from 'react';
import { unixToDate } from '../hooks/unixToDate';
import { kelvinToFahrenheit } from '../hooks/kelvinToFahrenheit';
import { capitalize } from '../hooks/capitalize';

const DailyCard = ({ day, id }) => {
    //function to calpitalize the first letter

    console.log(day, id);

    return (
        <div className='card'>
            <h4>{unixToDate(day.dt)}</h4>
            <div>
                <ul className='card-info'>
                    <li>
                        <strong>Current:</strong>{' '}
                        {kelvinToFahrenheit(day.temp.day)}°
                    </li>
                    <li>
                        <strong>High:</strong>
                        {kelvinToFahrenheit(day.temp.max)}°
                    </li>
                    <li>
                        <strong>Low:</strong> {kelvinToFahrenheit(day.temp.min)}
                        °
                    </li>
                    <li>{day.weather.map(w => capitalize(w.description))}</li>
                </ul>
                <hr />
                <button>
                    <Link to={`/day/${id}`}>More Info here</Link>
                </button>
            </div>
        </div>
    );
};

export default DailyCard;
