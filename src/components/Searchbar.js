import React, {useState, useEffect} from "react";
import TrackSquare from "./TrackSquare";
import "../scss/main.scss";

export default function Searchbar({getId, authToken}) {

    const [songName, setSongName] = useState("");
    const [results, setResults] = useState();
    const [resAmount, setResAmount] = useState(10);
    const [moreResults, setMoreResults] = useState("Pokaż więcej wyników...");

    const fetchData = ()=> {
  
      fetch (`https://api.spotify.com/v1/search?q=${songName}%20&type=track&limit=${resAmount}`,{
        headers: {
          "Authorization": "Bearer " + authToken
        }
      })
      .then(response => {
        if(response.status !== 400){
          return response.json()
        } 
      })
      .then(data => {
        if(data !== undefined){
          setResults(data) 
        } else {
          setMoreResults("To już wszystkie wyniki :(")
        }
      })
      .catch((err)=> {
        console.log("tutaj", err);
      })
    }
    
    const handleClick = (e)=> {
      e.preventDefault();
      setResAmount(10);
      setMoreResults("Pokaż więcej wyników...");
      console.log(resAmount);
      fetchData();  
    }

    const handleLoadButton = (e)=> {
      e.preventDefault();
      setResAmount(resAmount+10);
      console.log(resAmount);
      fetchData(); 
    }

    return (<>
        <form className="searchbar">
            <input type="text" onChange={e => setSongName(e.target.value)} className="searchbar_input" placeholder="Wpisz nazwę utworu/artysty"></input>
            <input type="submit" value="Przeszukaj Spotify" onClick={handleClick} className="searchbar_submit"></input>
        </form>

        {results !== undefined ? 

          (results.tracks.items.length !== 0 ?
            <>
            <h2 className="searchbar_results">Oto wyniki wyszukiwania. Czas na wybór:</h2>
            <div className="list_container">
                <ul className="track_list">
                  {results.tracks.items.map(item => (
                    <TrackSquare title={item.name} 
                          artist={item.artists[0].name} 
                          cover={item.album.images[0].url}
                          getId = {getId}
                          id = {item.id}
                          key={item.id}
                          className="track_list-item" 
                    />
                  ))}    
                </ul> 
              </div>
              {moreResults !== "Pokaż więcej wyników..." ?
                <button onClick={handleLoadButton} className="track_list-button end">{moreResults}</button>
                :
                <button onClick={handleLoadButton} className="track_list-button">{moreResults}</button>
              }
            </>
            :
            <>
              <h1 className="searchbar_error">Niestety - Spotify nie posiada takiego utworu w swojej bibliotece.</h1>
              <h1 className="searchbar_error">Jeszcze.</h1>
            </>
          ) 

        :
        <>
          <h2 className="searchbar_start">Witaj na&nbsp;<span className="searchbar_start-title">WaveMarket</span>!</h2>
          <h2 className="searchbar_start">Poznaj ciekawe (i dziwne) informacje na temat swoich ulubionych utworów na Spotify.</h2>
          <h2 className="searchbar_start">Wyszukaj utwór do zbadania a potem kliknij w jeden z wyników.</h2>
        </>
        }
    </>)
}