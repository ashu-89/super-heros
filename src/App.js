
//import './App.css';

import { useState } from "react";
import NavComp from "./NavComp";
import SearchBoxComp from "./SearchBoxComp";
import SearchResults from "./SearchResults";

function App() {

  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  async function callApi(){
      const response = await fetch(`https://www.superheroapi.com/api.php/10224483035691240/search/${searchText}`);
      const data = await response.json();
      console.log("callApi -> data",data);
      setSearchData(data.results);

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
    <div className="App">
      <NavComp></NavComp>
      <div className="main">
        <SearchBoxComp 
           searchText = {searchText} 
           searchSuperHeroes = {searchSuperHeroes}
        >
        </SearchBoxComp>
        <SearchResults
          searchData = {searchData}
        >
        </SearchResults>        
      </div>      
    </div>
  );
}

export default App;
