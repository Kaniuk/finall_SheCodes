import React, {useEffect, useState} from 'react';

import {currentService} from "../../services/current.service";
import {WeatherInfo} from "../weatherInfo/WeatherInfo";
import './CurrentWeather.css';


const CurrentWeather = ({defaultCity}) => {
    const [current, setCurrent] = useState();

    const getCityWeather = (city) => {
        currentService.getCurrent(city).then(data => {
            const isValidResponse = data.status !== 'not_found';

            setCurrent(isValidResponse ? data : undefined);
        });
    };

    useEffect(() => {
        getCityWeather(defaultCity);
    }, [defaultCity]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const city = formData.get('city');
        getCityWeather(city);
        form.reset();
    }

    const form = document.getElementsByTagName('form')[0];

    return (
        <div>
            <div className="forecast">
                <div className="search">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="city" placeholder="Enter city" className="col-8" autoFocus="on"/>
                            <input type="submit" className="col-3 btn-primary"/>
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