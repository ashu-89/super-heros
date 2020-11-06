import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
    const{searchData = []} = props;
    console.log("api response",searchData);
    return (
        <div>
            {   searchData.map( superHero =>     
                    <SearchResultItem data = {superHero} ></SearchResultItem>     
                )       
            }   
            
        </div>
    );
}

export default SearchResults;