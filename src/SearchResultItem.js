import React from 'react';

function SearchResultItem(props) {
    return (
        
            <div class="search-result">
                <div class="left">
                    <img src="https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg"></img>
                </div>
                <div class="right">
                    <h1>Bat Woman</h1>
                    <div className="stats">
                        <div>Strength: 99</div>
                        <div>Speed: 88</div>
                        <div>Power: 100</div>
                    </div>
                </div>
            </div>    
        
    );
}

export default SearchResultItem;