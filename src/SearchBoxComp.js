import React, { useState } from 'react';

function SearchBoxComp(props) {
    console.log('props', props);
    const {searchSuperHeroes,searchText} = props;

    return (
        <div>
            <input id="search-bar" 
                type="search" 
                placeholder="Hunt Super Heroes here ..."
                onChange = {searchSuperHeroes}
                value = {searchText}                
            >
            </input>
        </div>
    );
}

export default SearchBoxComp;