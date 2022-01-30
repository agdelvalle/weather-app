import * as React from "react";
import { useState } from "react";
import axios from 'axios';
import { getDetailedCurrentForcast } from '../helpers/currentDayDetails';
import { getCurrentDayForecast } from '../helpers/currentDayForecast';
import { getUpcomingDays } from '../helpers/upcomingDays'

const BASE_URL = 'https://api.allorigins.win/raw?url='
const CROSS_DOM = 'https://www.metaweather.com/api/location/'
const PROXIED_URL = `${BASE_URL}${CROSS_DOM}`;

export const useForecast = () => {
    // console.log("hook works")
    const [isLoading, setisLoading] = React.useState(false);
    const [isError, setisError] = React.useState(false);
    const [isForecast, setisForecast] = React.useState(null);

    const getWoeId = async location => {
        const {data} = await axios(`${PROXIED_URL}search/?query=${location}`)
        // console.log({data})  

        if(!data || data.length === 0){
            setisError("No such location");
            return;
        }
        // console.log(data)
        return data
    };

    const getForecast = async woeid => {
        const {data} = await axios(`${PROXIED_URL}${woeid}`)

        if(!data || data.length === 0){
            setisError("Something went wrong");
            return;
        }
        return {data}
    }

    const gatherForecastData = (data) => {
        const currentDetailed = getDetailedCurrentForcast(data.consolidated_weather[0])
        const currentSimple = getCurrentDayForecast(data.consolidated_weather[0], data.title )
        const upcoming = getUpcomingDays(data.consolidated_weather)

        // console.log(upcoming)

        setisForecast({ currentDetailed, currentSimple, upcoming });
        setisLoading(false);

    }
    
    const submitReq = async location => {
        setisLoading(true);
        setisError(false);
        
        const response =  await getWoeId(location);

        const {data} = await getForecast(response[0].woeid)
        
        if(!data || data.length === 0) return
        
        // setisLoading(false);
        gatherForecastData(data);
    };

    return {
        isLoading,
        isError,
        isForecast,
        submitReq
    };
}

