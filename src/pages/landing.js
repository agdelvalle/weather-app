import React from "react";
// import { ItemReport } from '../components/report'
import { LocButton } from "../components/button";
import { Search } from "../components/search";
import { Header } from "../components/header";
import { useForecast } from "../hooks/useForecast";
import { Forecast } from "../components/forecast";
import { LoadingSpin } from "../components/loading";
import { WeeklyForecast } from "../components/weekly-forecast";

export const Landing = () => {
    const {isLoading, isError, isForecast, submitReq} = useForecast();

    if(isForecast){
        console.log(isForecast.currentDetailed)
    }

    const onSubmit = (value) => {
        submitReq(value)
    }

    return (
    <>
    <Header />
    <div className="mainContent">
            <h1>Weather Report</h1>
        <>
        {isLoading && <LoadingSpin />}
        {isError && <h2>No such city found, please try again.</h2>}
        {!isLoading && isForecast &&
        <div className="reportContainer">
            <div className="daily">
                {isForecast && !isLoading && 
                <Forecast 
                location = {isForecast.currentSimple.location}
                weekday = { isForecast.currentSimple.weekday }
                date = { isForecast.currentSimple.date }
                temp = { isForecast.currentSimple.temp }
                icon = { isForecast.currentSimple.icon }
                desc = { isForecast.currentSimple.desc }
                />}
                <div className="daily-details">
                {isForecast && isForecast.currentDetailed.map((item) => (
                    <div className="detail">
                        <h2>{item.name}</h2>
                        <h2 className="regtxt">{item.value}{item.unit}</h2>
                    </div>
                ))}
                </div>
            </div>
            <h2>Five-day Forecast</h2>
            <div className="weekly">
            {isForecast && isForecast.upcoming.map((day) => (
                <WeeklyForecast 
                icon={day.icon}
                temp={day.temp}
                weekday={day.weekday}/>
                ))}
            </div>
        </div>
        }
        </>
        {!isForecast ? <h2>Search for a city:</h2> : <h2>Search for another city?</h2> }
        <Search func={onSubmit}/>
            <div className="btnsContainer">
                <h2>Popular Cities</h2>
                <div className="popCities">
                    <LocButton id="London" func={onSubmit}/>
                    <LocButton id="Sydney" func={onSubmit}/>
                    <LocButton id="New York" func={onSubmit}/>
                    <LocButton id="Beijing" func={onSubmit}/>
                    <LocButton id="Tokyo" func={onSubmit}/>
                    <LocButton id="Manila" func={onSubmit}/>
            </div> 
        </div>   
    </div>
    </>
    )
}