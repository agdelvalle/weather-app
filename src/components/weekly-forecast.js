export const WeeklyForecast = (props) => {
    return(
    <div className="temp">
        <p>{props.temp}</p>
        <p>{props.weekday}</p>
    </div>
    )
}