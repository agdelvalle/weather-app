export const Forecast = (props) => {
    // const imgUrl = `https://api.allorigins.win/raw?url=$`
    return <div className="forecastReport">
    {/* <h2>forecast works!</h2> */}
    <div className="left">
        <img src={props.icon} />
    </div>
    <div className="right">
        <h1>{props.location}</h1>
        <h2>{props.date}</h2>
        <h1>{props.desc}</h1>
    </div> 
    </div>
}