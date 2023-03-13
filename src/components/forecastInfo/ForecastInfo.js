import React from 'react';

const ForecastInfo = ({forecast}) => {
    let temperature = Math.round(forecast.temperature.day);
    return (
        <div className="col-1 m-3 d-flex flex-column justify-content-center align-items-center">
            <div><img src={forecast.condition.icon_url} alt={forecast.condition.description} width={60}/></div>
            <div className='align-content-center'>{temperature}°C</div>
        </div>
    );
};

export {ForecastInfo};