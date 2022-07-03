import React from "react";




const Card = ({ element }) => {

    return (
        <div className="card">
            
            <div>
                <img src={'https://image.tmdb.org/t/p/original/' + element.poster_path} alt={element.title} />
            </div>
            <div>
                <h1>{ element.title }</h1>
                <div>
                    { element.overview }
                </div>
            </div>

        </div>
    );
}

export default Card;