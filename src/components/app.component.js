import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useTimeline } from "../hooks/use-weather.hook";
import TomorrowIcon from '../icons/tomorrow-icon.svg';
import PinIcon from '../icons/pin.svg';
import { addHours } from "../utilities";

const now = new Date();
const startTime = now.toISOString();
const endTime = addHours({ date: now, hours: 6 }).toISOString();

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Oops! Something went wrong :(</div>;
}

function PoweredByTomorrow() {
    return (
        <div className="powered">
            <a className="powered-link" target="_blank" href="https://www.tomorrow.io">
                <img className="icon powered-icon"
                     src={TomorrowIcon}
                     alt="Powered by Tomorrow.io"
                     title="Powered by Tomorrow.io" />
                Powered by Tomorrow.io
            </a>
        </div>
    );
}

function App({ apikey, lat, lon, location }) {
    const [timelineResponse, timelineLoading, timelineHasError] = useTimeline({
        apikey, lat, lon, startTime, endTime
    });

    if (timelineLoading) {
        return <Loading />;
    }

    if (timelineHasError) {
        return <Error />;
    }

    const realtimeResponse = timelineResponse.data.timelines[0];

    const hourlyResponse = timelineResponse.data.timelines[1];

    return (
        <div className="app-root">
            <PoweredByTomorrow />
            <div className="time">{now.toDateString()}</div>
            <div className="location">
                <img className="icon location-icon"
                     src={PinIcon}
                     alt={location}
                     title={location} />
                {location}
            </div>
            <Realtime realtime={realtimeResponse} />
            <div className="divider" />
            <Hourly hourly={hourlyResponse} />
        </div>
    );
}

export { App };
