export const getUpcomingDays = (data) => {
    const upcomingData = data.slice(1, 6).map(day => ({
        icon: day.weather_state_abbr,
        temp: Math.round(day.max_temp).toFixed(2),
        weekday: day.applicable_date,
    }))

    return upcomingData;
}