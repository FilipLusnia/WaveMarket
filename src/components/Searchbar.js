import React, {useState, useEffect} from "react";
import Track from "./TrackSquare";

export default function Searchbar({client_id, client_secret, getId}) {

    const [songName, setSongName] = useState("");
    const [results, setResults] = useState();
    const [resAmount, setResAmount] = useState(10);

    const fetchData = ()=> {
      const request = require("request");
  
            const authOptions = {
              url: "https://accounts.spotify.com/api/token",
              headers: {
                "Authorization": "Basic " + (new Buffer(client_id + ":" + client_secret).toString("base64"))
              },
              form: {
                grant_type: "client_credentials"
              },
              json: true
            };
        
            
            request.post(authOptions, function(error, response, body) {
              
              if (!error && response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                const token = body.access_token;
        
                fetch (`https://api.spotify.com/v1/search?q=${songName}%20&type=track&limit=${resAmount}`,{
                  headers: {
                    "Authorization": "Bearer " + token
                  },
                })
                .then(response => response.json())
                .then(data => {
                    setResults(data) 
                })
              }
            });
    }
    
    const handleClick = (e)=> {
        e.preventDefault();
        setResAmount(10);
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
        <form>
            <input type="text" onChange={e => setSongName(e.target.value)} placeholder="Wyszukaj cokolwiek..."></input>
            <input type="submit" value="Przeszukaj Spotify" onClick={handleClick}></input>
        </form>

        {results !== undefined ? 
          (results.tracks.items.length !== 0 ?
            <>
              <ul>
                  {results.tracks.items.map(item => (
                      <Track title={item.name} 
                          artist={item.artists[0].name} 
                          cover={item.album.images[0].url}
                          getId = {getId}
                          id = {item.id}
                          key={item.id} 
                      />
                  ))}    
              </ul> 
              <button onClick={handleLoadButton}>Pokaż więcej wyników...</button>
            </>
            :
            <h1>Niestety - Spotify nie posiada takiego utworu w swojej bibliotece.</h1>
          )    
        :
        <h2>Wyszukaj utwór, który chcesz zbadać.</h2>
        }
    </>)
}