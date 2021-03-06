import React, {useState, useEffect} from "react";
import TrackSquare from "./TrackSquare";

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
        setMoreResults("Pokaż więcej wyników...")
      } else {
        setMoreResults("To już wszystkie wyniki :(")
      }
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  useEffect(()=> {  
    if(results){
      fetchData();  
    } // eslint-disable-next-line
  }, [resAmount]) 
  
  const handleClick = (e)=> {
    e.preventDefault();
    setResAmount(null);
    setResAmount(10);
    setMoreResults("Pokaż więcej wyników...");
    if(resAmount === 10){
      fetchData(); 
    }
  }

  const handleLoadButton = (e)=> {
    if(moreResults !== "To już wszystkie wyniki :("){
      setMoreResults("Ładowanie...");
    }
    e.preventDefault();
    setResAmount(resAmount+10);
  }

  return (
    <>
      <div className="searchbar">
          <input type="text" onChange={e => setSongName(e.target.value)} className="searchbar_input" placeholder="Wpisz nazwę utworu/artysty"/>
          <input type="submit" value="Przeszukaj Spotify" onClick={handleClick} className="searchbar_submit"/>
      </div>

      {results !== undefined ? 

          (results.tracks.items.length !== 0 
            ?
            <>
              <h2 className="searchbar_results">Wybierz utwór:</h2>
              <div className="list_container">

                  <ul className="track_list">
                    {results.tracks.items.map(item => (
                      <TrackSquare 
                            title={item.name} 
                            artist={item.artists[0].name} 
                            cover={item.album.images[0].url}
                            getId = {getId}
                            id = {item.id}
                            key={item.id}
                      />
                    ))}    
                  </ul> 

              </div>
              {moreResults !== "Pokaż więcej wyników..." && moreResults !== "Ładuję..."
                ?
                <button onClick={handleLoadButton} className="track_list-button end">{moreResults}</button>
                :
                <button onClick={handleLoadButton} className="track_list-button">{moreResults}</button>
              }
            </>
            :
            <>
              <h1 className="searchbar_error">Niestety - Spotify nie posiada takiego utworu w swojej bibliotece.</h1>
              <h1 className="searchbar_error">Do czasu.</h1>
            </>
          ) 

        :
        
        <>
          <h2 className="searchbar_start">Witaj na&nbsp;<span className="searchbar_start-title">WaveMarket</span>!</h2>
          <h2 className="searchbar_start">Poznaj ciekawe informacje na temat swoich ulubionych utworów z Spotify.</h2>
          <h2 className="searchbar_start bottomline">Wyszukaj utwór do zbadania a potem kliknij w jeden z wyników (MAX. 50).</h2>
        </>
      }
    </>
  )
}