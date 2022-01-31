export const WeeklyForecast = (props) => {
    const imgUrl = 'https://www.metaweather.com/static/img/weather/'

    return(
    <div className="week-day-report">
        <img src={`${imgUrl}${props.icon}.svg`} className="sm-weatherIcon"/>
        <p>{props.temp} C</p>
        <p>{props.weekday}</p>
    </div>
    )
}