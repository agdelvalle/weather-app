export const getCurrentDayForecast = (data, title) => ({
    weekday: data.applicable_date,
    date: data.applicable_date,
    location: title,
    temp: Math.round(data.the_temp).toFixed(2),
    icon: data.weather_state_abbr,
    desc: data.weather_state_name,
})