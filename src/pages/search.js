import React from "react";
import { Header } from "../components/header";

export const Search = () => {
    return (<>
    <Header />
    <h1>Weather Report</h1>
    <label for="search">Search by city</label>
    <input type="text" id="search"></input>   
    </>
    )
}