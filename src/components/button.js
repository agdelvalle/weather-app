import * as React from "react";
import classnames from "classnames";

export const LocButton = (props) => {
    const [SearchLocation, setSearchLocation] = React.useState("")

    const idClass = props.id; 
    const trimmed = props.id.trim();

    const onClickBtn = (e) => {
        e.preventDefault();
        setSearchLocation(props.id)
        if (!SearchLocation || SearchLocation == "") return
        props.func(SearchLocation)
    }

    return <button className={classnames(trimmed, 'locButton')} onClick={(e) =>{onClickBtn(e)}}>
        <h2>{props.id}</h2>
    </button>
}