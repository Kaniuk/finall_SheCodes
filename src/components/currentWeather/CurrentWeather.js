import React, {useEffect, useState} from 'react';

import {currentService} from "../../services/current.service";
import {WeatherInfo} from "../weatherInfo/WeatherInfo";
import './CurrentWeather.css';


const CurrentWeather = ({defaultCity}) => {
    const [current, setCurrent] = useState();
    const [city, setCity] = useState(defaultCity);

    useEffect(() => {
        currentService.getCurrent(city).then(data => {
            const isValidResponse = data.status !== 'not_found';

            setCurrent(isValidResponse ? data : undefined);
        });
    }, [city]);

    function handleSubmit(e) {
        e.preventDefault();
        form.reset();
    }

    function handleCityChange(e) {
        setCity(e.target.value);
    }

    const form = document.getElementsByTagName('form')[0];

    return (
        <div>
            <div className="forecast">
                <div className="search">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="city" placeholder="Enter city" className="col-8" autoFocus="on"
                                   onChange={handleCityChange}/>
                            <input type="submit" value="Search" className="col-3 btn-primary"/>
                        </form>
                    </div>
                </div>
                {current && (
                    <WeatherInfo weather={current}/>
                )}
            </div>
        </div>
    );
};

export {CurrentWeather};