import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Glance from './components/Glance';
import DayInfo from './components/DayInfo';

const App = () => {
    const [weather, setWeather] = useState({});
    const [lat, setLat] = useState('39.29');
    const [long, setLong] = useState('-76.60');

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
