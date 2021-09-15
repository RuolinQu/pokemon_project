import React from "react";

const PokemonCard = ({data}) => {

    return (
        <div className="card-container">
            <div className="card-header">
                <h4>{data.name}</h4>
                <h4>{ data.id}</h4>
            </div>
            <div className="card-content"><img src={data.src}/></div>
        </div>
    )
}

export default PokemonCard;
