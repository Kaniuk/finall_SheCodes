import React, {useEffect, useState} from 'react';

import {WeatherTemperature} from "../weatherTemperature/WeatherTemperature";
import {CurrentDate} from "../currentDate/CurrentDate";
import {ForecastInfo} from "../forecastInfo/ForecastInfo";
import {forecastService} from "../../services/forecast.service";


const WeatherInfo = ({weather}) => {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        forecastService.getAll(weather.city).then(value => setForecasts(value.daily));
    }, [weather.city]);

    return (
        <div>
            <div className="city">
                <h1>{weather.city}</h1>
                <img src={weather.condition.icon_url} alt="weather" width="100"/>
            </div>
            <div className="content row">

                <div className="cityInfo col-6">

                    <div className="info">
                        <div>Last updated: <CurrentDate date={new Date(weather.time * 1000)}/></div>
                        <div>{weather.condition.description}</div>
                        <div>Humidity: {weather.temperature.humidity}%</div>
                        <div>Wind: {weather.wind.speed}km/h</div>
                    </div>
                </div>
                <div className="col-5">
                    <WeatherTemperature current={weather}/>
                </div>
                <div className="row">
                    {forecasts && (forecasts.map(forecast => <ForecastInfo key={forecast.time} forecast={forecast}/>))}
                </div>
            </div>
        </div>
    );
};

export {WeatherInfo};