import { useParams } from 'react-router-dom';
import { unixToDate } from '../hooks/unixToDate';

const DayInfo = ({ weather }) => {
    const { id } = useParams();
    console.log(id);
    console.log(weather.daily[id]);
    return (
        <div className='day-page'>
            {unixToDate(weather.daily[id].dt)}
            <div className='day-card'>
                <div className='day-info'></div>
            </div>
        </div>
    );
};

export default DayInfo;
