/**
 * Creates a full URL from a base URL and query params.
 * @param url
 * @param query
 * @returns {string}
 */
const createUrl = ({ url, query = {} }) => {
  const urlBuilder = new URL(url);

  Object.entries(query).forEach(([key, value]) => {
    if (value == null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((val) => urlBuilder.searchParams.append(key, val));
      return;
    }

    urlBuilder.searchParams.append(key, value);
  });

  return urlBuilder.toString();
};

/**
 * Returns a date <hours> after the given <date>.
 * @param date
 * @param hours
 */
const addHours = ({ date, hours = 0 }) => {
  const newDate = new Date(date.valueOf());
  newDate.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return newDate;
};

/**
 * Formats time in a way we want to present it.
 * Examples: 7AM, 12PM
 * @param time
 * @returns {string}
 */
const formatTime = (time) => {
  const hours = new Date(time).getHours();
  const suffix = hours >= 12 ? "PM" : "AM";
  let display = hours % 12;
  if (display === 0) {
    display = 12;
  }
  return `${display}${suffix}`;
};

/**
 * Converts weather code value to human display string.
 * Example: freezing_rain to Freezing Rain
 * @param str
 * @returns {string}
 */
const prettyPrintWeatherCode = (code) => {
  const weatherCodes = {
    0: "Unknown",
    1000: "Clear",
    1001: "Cloudy",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    3000: "Light Wind",
    3001: "Wind",
    3002: "Strong Wind",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm",
  };
  return weatherCodes[code.toString()];
};

export { createUrl, addHours, formatTime, prettyPrintWeatherCode };
