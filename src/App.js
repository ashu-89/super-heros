
//import './App.css';

import { useState } from "react";
import NavComp from "./NavComp";
import SearchBoxComp from "./SearchBoxComp";
import SearchResults from "./SearchResults";

function App() {
  

  return (
    <div className="App">
      <NavComp></NavComp>
      <div className="main">
        <SearchBoxComp></SearchBoxComp>
        <br></br>
        <SearchResults></SearchResults>
        
      </div>
      
    </div>
  );
}

export default App;
