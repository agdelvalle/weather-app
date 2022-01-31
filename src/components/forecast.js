export const Forecast = (props) => {
    // const imgUrl = `https://api.allorigins.win/raw?url=$`
    const imgUrl = 'https://www.metaweather.com/static/img/weather/'

    return <div className="daily-summary">
    {/* <h2>forecast works!</h2> */}
        <img src={`${imgUrl}${props.icon}.svg`} className="weatherIcon"/>
        <h2>{props.location}</h2>
        <h2>{props.date}</h2>
        <h4>{props.temp} C</h4>
        <h4>{props.desc}</h4>
    </div>
}