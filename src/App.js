
//import './App.css';

import { useState } from "react";
import NavComp from "./NavComp";
import SearchBoxComp from "./SearchBoxComp";
import SearchResults from "./SearchResults";

function App() {
  

  return (
    <div className="App">
      Hi
      <NavComp></NavComp>
      <SearchBoxComp></SearchBoxComp>
      <SearchResults></SearchResults>
      
    </div>
  );
}

export default App;
