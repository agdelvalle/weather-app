import React, { useState } from "react";

export const Header = () => {
    return(
        <div className="header">
            <ul>
                <a href="https://github.com/agdelvalle/" target="_blank"><li>Home</li></a>
                <a href="https://www.metaweather.com/about/" target="_blank"><li>Metaweather API</li></a>
            </ul>
        </div>
    )
}