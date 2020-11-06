import React, { useState } from 'react';

function SearchBoxComp(props) {

    const [searchText, setSearchText] = useState("");

    async function callApi(){
        const response = await fetch(`https://www.superheroapi.com/api.php/10224483035691240/search/${searchText}`);
        const data = await response.json();
        console.log("callApi -> data",data);

    }
    
    function searchSuperHeroes(e){
        const searchTerm = e.target.value;
        console.log("searchSuperHeroes -> searchTerm", searchTerm);
        setSearchText(searchTerm);
        if(searchTerm.length > 3){
            callApi();
        }


    }


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