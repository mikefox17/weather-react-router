import { Link } from 'react-router-dom';
import React from 'react';
import { unixToDate } from '../hooks/unixToDate';

const DailyCard = ({ day, id }) => {
    console.log(day, id);

    return (
        <div className='daily-card'>
            <Link to={`/day/${id}`}>More here</Link>
            <h3>{unixToDate(day.dt)}</h3>
            <div>
                <ul className='card-info'>
                    <li>day.dt</li>
                    <li>feels like</li>
                    <li>desc</li>
                </ul>
            </div>
        </div>
    );
};

export default DailyCard;
