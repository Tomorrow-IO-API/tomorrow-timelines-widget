import React from 'react';
import './realtime.component.css';
import { Temp } from "./temp.component";
import { WeatherIcon } from "./weather-icon.component";
import { prettyPrintWeatherCode } from "../utilities";

function Realtime({ realtime }) {
    return (
        <div className="realtime">
            <div className="realtime-temp"><Temp value={realtime.intervals[0].values.temperature} /></div>
            <div className="realtime-temp-degrees">°C</div>
            <div>
                <div className="realtime-weather-code">{prettyPrintWeatherCode(realtime.intervals[0].values.weatherCode)}</div>
                <div className="realtime-feels-like">Feels Like <Temp value={realtime.intervals[0].values.temperatureApparent} />°</div>
            </div>
            <div className="realtime-icon">
                <WeatherIcon value={realtime.intervals[0].values.weatherCode} />
            </div>
        </div>
    );
}

export { Realtime };
