export const getCurrentDayForecast = (data, title) => ({
    weekday: data.applicable_date,
    date: data.applicable_date,
    location: title,
    temp: Math.round(data.the_temp).toFixed(2),
    icon: `https://api.allorigins.win/raw?url=https://metaweather.com/static/img/weather/png/${data.weather_state_abbr}.png`,
    desc: data.weather_state_name,
})