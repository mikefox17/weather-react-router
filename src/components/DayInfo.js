import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unixToDate } from '../hooks/unixToDate';

const DayInfo = ({ weather }) => {
    const { id } = useParams();
    const [icon, setIcon] = useState('');
    const weatherIcon = weather.daily[id].weather[id].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    console.log(weather.daily[id]);
    const getIcon = async () => {
        try {
            const res = await fetch(iconUrl);
            const data = await res.json();
            setIcon(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getIcon();
    }, []);
    console.log(icon);

    return (
        <div className='day-page'>
            {unixToDate(weather.daily[id].dt)}
            <div className='day-card'>
                <div className='day-info'></div>
                <img src={icon} alt='' />
            </div>
        </div>
    );
};

export default DayInfo;
