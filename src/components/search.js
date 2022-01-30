import * as React from "react";
import propTypes from 'prop-types';
// import { Header } from "../components/header";

export const Search = (props) => {
    const [SearchLocation, setSearchLocation] = React.useState("")

    const onSubmitInput = (e) => {
        e.preventDefault();
        if (!SearchLocation || SearchLocation == "") return
        props.func(SearchLocation)
    }

    return (<>
    <form onSubmit={onSubmitInput}>
        <label htmlFor="search">Search by city</label>
        <input type="text" id="search" onChange={(e) => {setSearchLocation(e.target.value)}}></input>   
        <button onClick={onSubmitInput}>Search</button>
    </form>
    </>
    )
}

Search.propTypes = {
    func: propTypes.func.isRequired,
}