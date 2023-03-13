import React, {useState} from 'react';

const WeatherTemperature = ({current}) => {

    const [unit, setUnit] = useState('celsius');

    let temperature = Math.round(current.temperature.current);

    function convertToFar(e) {
        e.preventDefault();
        setUnit('fahrenheit');
    }

    function convertToCels(e) {
        e.preventDefault();
        setUnit('celsius');
    }

    function fahrenheit() {
        return (temperature * 9) / 5 + 32;
    }

    if (unit === 'celsius') {
        return (
            <div>
                <div className="temperature d-flex">
                    <div>{Math.round(current.temperature.current)}</div>
                    °C
                    /
                    <a href="/" onClick={convertToFar}>°F</a>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="temperature d-flex">
                    <div>{Math.round(fahrenheit())}</div>
                    <a href="/" onClick={convertToCels}>°C</a>
                    /
                    °F

                </div>
            </div>
        );
    }
};

export {WeatherTemperature};