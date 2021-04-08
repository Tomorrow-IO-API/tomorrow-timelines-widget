const weatherIcons = {
    1000: require('./icons/clear_day.svg'),
    1001: require('./icons/cloudy.svg'),
    1100: require('./icons/mostly_clear_day.svg'),
    1101: require('./icons/partly_cloudy_day.svg'),
    1102: require('./icons/mostly_cloudy.svg'),
    2000: require('./icons/fog.svg'),
    2100: require('./icons/fog_light.svg'),
    // 3000: "Light Wind",
    // 3001: "Wind",
    // 3002: "Strong Wind",
    4000: require('./icons/drizzle.svg'),
    4001: require('./icons/rain.svg'),
    4200: require('./icons/rain_light.svg'),
    4201: require('./icons/rain_heavy.svg'),
    5000: require('./icons/snow.svg'),
    5001: require('./icons/flurries.svg'),
    5100: require('./icons/snow_light.svg'),
    5101: require('./icons/snow_heavy.svg'),
    6000: require('./icons/freezing_drizzle.svg'),
    6001: require('./icons/freezing_rain.svg'),
    6200: require('./icons/freezing_rain_light.svg'),
    6201: require('./icons/freezing_rain_heavy.svg'),
    7000: require('./icons/ice_pellets.svg'),
    7101: require('./icons/ice_pellets_heavy.svg'),
    7102: require('./icons/ice_pellets_light.svg'),
    8000: require('./icons/tstorm.svg')
  };

export function getIcon(weatherCode) {
    return weatherIcons[weatherCode];
}