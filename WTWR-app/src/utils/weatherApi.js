const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getWeatherType = (temp) => {
  if (temp >= 80) {
    return "hot";
  } else if (temp >= 68) {
    return "warm";
  } else {
    return "cold";
  }
};

export const assessWeatherCode = (code) => {
  if (code > 800) {
    return "cloudy";
  } else if (code == 800) {
    return "sunny";
  } else if (code == 741) {
    return "foggy";
  } else if (code >= 600) {
    return "snowy";
  } else if (code >= 300) {
    return "rainy";
  } else if (code >= 200) {
    return "stormy";
  } else {
    return "sunny";
  }
};

export const getWeather = ({ key, lat, long }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`
  ).then((res) => checkResponse(res));
};
