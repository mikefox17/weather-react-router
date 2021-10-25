import Glance from './components/Glance';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';
import DayInfo from './components/DayInfo';
import { useState, useEffect } from 'react';

const App = () => {
    const [weather, setWeather] = useState({});
    const [lat, setLat] = useState('-33.04');
    const [long, setLong] = useState('94.01');

    const getWeather = async () => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
            );
            const data = await res.json();
            setWeather(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    if (!weather.current) return null;
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Glance weather={weather} lat={lat} long={long} />
                    </Route>
                    <Route path='/day/:id'>
                        <DayInfo weather={weather} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default App;
