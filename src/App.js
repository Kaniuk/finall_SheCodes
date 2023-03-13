import React from 'react';

import {CurrentWeather} from "./components/currentWeather/CurrentWeather";

const App = () => {
    return (
        <div>
          <CurrentWeather defaultCity={'Kyiv'}/>
        </div>
    );
};

export default App;