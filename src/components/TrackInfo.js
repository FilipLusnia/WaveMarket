import React, {useState, useEffect} from "react";
import "../scss/main.scss";

export default function TrackInfo({currId, removeId, authToken}){

    const [trackInfo, setTrackInfo] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    useEffect(()=> {
        if(currId !== null && currId){
            fetch (`https://api.spotify.com/v1/audio-features/${currId}`,{
                headers: {
                    "Authorization": "Bearer " + authToken
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data =>  {
                console.log(data);
                setTrackInfo(data);
            })  
            .then(setIsClosed(false))
        } 
    }, [currId])  

    const handleClose = (e)=> {
        e.preventDefault();
        if (trackInfo){
            setIsClosed(true)
            setTrackInfo(false)
            removeId();
        }
    }
    
    return (
        <> 
            {trackInfo !== false && isClosed === false?
                <div className="trackinfo_container">
                    <button onClick={handleClose}>Z</button>
                    <div>Długość utworu: <>  
                        {((trackInfo.duration_ms/1000)/60).toFixed(0)}:
                        {(trackInfo.duration_ms/1000)%60 < 10 
                            ? 
                            `0${((trackInfo.duration_ms/1000)%60).toFixed(0)}`
                            :
                            ((trackInfo.duration_ms/1000)%60).toFixed(0)
                        }
                        </>
                    </div>
                    <div>Tempo utworu: {trackInfo.tempo.toFixed(0)} BPM</div>
                    <div>Tonacja (0: C, 1: C#, 2: D, itd.): {trackInfo.key}</div>
                    <div>Skala: {trackInfo.mode === 0 ? "Minorowa" : "Majorowa"}</div>
                    <div>Średnia wartość głośności wyrażona w LUFS(?): {trackInfo.loudness.toFixed(1)}</div>
                    <div>Szansa, że nie zaśniesz podczas słuchania: {`${(trackInfo.energy*100).toFixed(0)}%`}</div>
                    <div>Da się do tego tańczyć?: {`${(trackInfo.danceability*100).toFixed(0)}%`}</div>
                    <div>Ilość pozytywności/euforii: {`${(trackInfo.valence*100).toFixed(0)}%`}</div>
                    <div>Procent sekcji wyłącznie instrumentalnych: {`${(trackInfo.instrumentalness*100).toFixed(0)}%`}</div>
                    <div>Szansa, że to utwór akustyczny: {`${(trackInfo.acousticness*100).toFixed(0)}%`}</div>
                    <a href={`https://open.spotify.com/track/${trackInfo.id}`} 
                       target="_blank"
                       rel="noopener noreferrer">
                       Odtwórz utwór w Spotify
                    </a>
                </div>
            :
                null
            }
        </>
    )
}