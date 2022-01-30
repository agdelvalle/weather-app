import React from "react";
// import { ItemReport } from '../components/report'
import { LocButton } from "../components/button";
import { Search } from "../components/search";
import { Header } from "../components/header";
import { useForecast } from "../hooks/useForecast";
import { Forecast } from "../components/forecast";
import { LoadingSpin } from "../components/loading";
import { WeeklyForecast } from "../components/weekly-forecast";

const displayLoc = document.querySelector("#location")

export const Landing = () => {
    const {isLoading, isError, isForecast, submitReq} = useForecast();

    if(isForecast){
        console.log(isForecast.upcoming)
    }

    const onSubmit = (value) => {
        submitReq(value)
    }

    return (
    <>
    <Header />
    <div className="mainContent">
        <h1>Weather Report</h1>
        {isLoading && <LoadingSpin />}
        {isForecast && !isLoading && 
        <Forecast 
        location = {isForecast.currentSimple.location}
        weekday = { isForecast.currentSimple.weekday }
        date = { isForecast.currentSimple.date }
        temp = { isForecast.currentSimple.temp }
        icon = { isForecast.currentSimple.icon }
        desc = { isForecast.currentSimple.desc }
        />}
        <div className="weekly">
        {isForecast && isForecast.upcoming.map((day) => (
            <WeeklyForecast 
            temp={day.temp}
            weekday={day.weekday}/>
            ))}
        </div>
        {!isForecast ? <h2>Search for a city:</h2> : <h2>Search for a city again?</h2> }
        <Search func={onSubmit}/>
            <div className="btnsContainer">
            <h2>Popular Cities</h2>
            <div className="popCities">
                <LocButton id="london" func={onSubmit}/>
                <LocButton id="sydney" func={onSubmit}/>
                <LocButton id="new york" func={onSubmit}/>
                <LocButton id="beijing" func={onSubmit}/>
                <LocButton id="tokyo" func={onSubmit}/>
                <LocButton id="manila" func={onSubmit}/>
            </div> 
        </div>   
    </div>
    </>
    )
}