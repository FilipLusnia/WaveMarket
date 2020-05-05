import React, {useState, useEffect} from "react";
import "../scss/App.scss";
import "../scss/main.scss";
import Searchbar from "./Searchbar";
import TrackInfo from "./TrackInfo";

export default function App() {

  const client_id = "fb185e2943374c65b6cdc939c506b3c1"; 
  const client_secret = "7211f605e1274061ad0808b8f2da4fed"; 
 
  const [currId, setCurrId] = useState();

  const getId = (id)=> {
    setCurrId(id);
    console.log(id);
  }

  return(
    <div className="App">
      <TrackInfo
        client_id = {client_id}
        client_secret = {client_secret}
        currId = {currId}
      />

      <Searchbar 
        client_id = {client_id}
        client_secret = {client_secret}
        getId = {getId}
      />
    </div>
  )
}