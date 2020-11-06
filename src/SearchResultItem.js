import React from 'react';

function SearchResultItem(props) {
    const{data} = props;
    console.log("data in search result item", data);
    

    return (
        
            <div class="search-result">
                <div class="left">
                    <img src={data.image.url}></img>
                </div>
                <div class="right">
                    <h1>{data.name}</h1>
                    <span style={ {color:'gray', margin:5, fontSize:36} } >{data.biography['full-name']}</span>
                    <div className="stats">
                        <div>Strength: {data.powerstats.strength}</div>
                        <div>Speed: {data.powerstats.speed}</div>
                        <div>Power: {data.powerstats.power}</div>
                    </div>
                </div>
            </div>    
        
    );
}

export default SearchResultItem;