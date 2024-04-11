import React from "react";

export default function Movie({title, vote_average}) {
    return(
        <div className="movie-container">
            <div className="movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}