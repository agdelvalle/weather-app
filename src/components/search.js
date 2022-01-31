import * as React from "react";
import propTypes from 'prop-types';
// import { Header } from "../components/header";

export const Search = (props) => {
    const [SearchLocation, setSearchLocation] = React.useState("")

    const onSubmitInput = (e) => {
        e.preventDefault();
        if (!SearchLocation || SearchLocation === "") return
        props.func(SearchLocation)
    }

    return (<div className="search-form">
    <form onSubmit={onSubmitInput}>
        <input type="text" id="search" placeholder="Search by city" onChange={(e) => {setSearchLocation(e.target.value)}}></input>   
        <button onClick={onSubmitInput}>Search</button>
    </form>
    </div>
    )
}

Search.propTypes = {
    func: propTypes.func.isRequired,
}