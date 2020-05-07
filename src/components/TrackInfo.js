import React, {useState, useEffect} from "react";
import "../scss/main.scss";

export default function TrackInfo({currId, removeId, authToken}){

    const [trackInfo, setTrackInfo] = useState(false);
    const [trackThumb, setTrackThumb] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    useEffect(()=> {
        if(currId !== null){
            fetch (`https://api.spotify.com/v1/audio-features/${currId}`,{
                headers: {
                    "Authorization": "Bearer " + authToken
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data =>  {
                setTrackInfo(data);
            })  
            .then(setIsClosed(false))
        } 
    }, [currId])  

    useEffect(()=> {
        if(currId !== null){
            fetch (`https://api.spotify.com/v1/tracks/${currId}`,{
                headers: {
                    "Authorization": "Bearer " + authToken
                }
            })
            .then(response => {
                return response.json()
            })
            .then(data =>  {
                setTrackThumb(data);
            })  
        } 
    }, [trackInfo]) 

    const handleClose = (e)=> {
        e.preventDefault();
        if (trackInfo){
            setIsClosed(true)
            setTrackInfo(false)
            setTrackThumb(false)
            removeId();
        }
    }
    
    return (
        <> 
            {trackInfo !== false && isClosed === false
            ?
                <>
                    <div className="trackinfo_background">
                    </div>
                    <div className="trackinfo_container">
                        <button className="trackinfo_close-btn" onClick={handleClose}>Zamknij</button>
                        <div className="trackinfo_data-container">
                            <div className="trackinfo_thumbnail">
                                <img src={trackThumb.album} alt="cover" height="200" width="200"/>
                                <div>{trackThumb.name}</div>
                                <div>{console.log(trackThumb)}</div>
                            </div>
                            <div className="trackinfo_data">

                                <div className="trackinfo_duration">Długość utworu:&nbsp;<div>   
                                        {((trackInfo.duration_ms/1000)/60).toFixed(0)}:
                                        {(trackInfo.duration_ms/1000)%60 < 10 
                                            ? 
                                            `0${((trackInfo.duration_ms/1000)%60).toFixed(0)}`
                                            :
                                            ((trackInfo.duration_ms/1000)%60).toFixed(0)
                                        }</div>
                                </div>

                                <div className="trackinfo_tempo">Tempo utworu:&nbsp;<div>{trackInfo.tempo.toFixed(0)}</div>&nbsp;BPM</div>

                                <div className="trackinfo_key">Tonacja (0: C, 1: C#, 2: D, itd.):&nbsp;<div>{trackInfo.key}</div></div>

                                <div className="trackinfo_scale">Skala:&nbsp;<div>{trackInfo.mode === 0 ? "Minorowa" : "Majorowa"}</div></div>

                                <div className="trackinfo_loudness">Średnia wartość głośności wyrażona w LUFS(?):&nbsp;<div>{trackInfo.loudness.toFixed(1)}</div></div>

                                <div className="trackinfo_energy">Szansa, że nie zaśniesz podczas słuchania:&nbsp;<div><div style={{width: `${(trackInfo.energy*100).toFixed(0)}%`}}></div>{`${(trackInfo.energy*100).toFixed(0)}%`}&nbsp;</div></div>

                                <div className="trackinfo_danceability">Da się do tego tańczyć ?:&nbsp;<div><div style={{width: `${(trackInfo.danceability*100).toFixed(0)}%`}}></div>{`${(trackInfo.danceability*100).toFixed(0)}%`}&nbsp;</div></div>

                                <div className="trackinfo_valence">Ilość pozytywności/euforii:&nbsp;<div><div style={{width: `${(trackInfo.valence*100).toFixed(0)}%`}}></div>{`${(trackInfo.valence*100).toFixed(0)}%`}&nbsp;</div></div>

                                <div className="trackinfo_instrumentalness">Procent sekcji wyłącznie instrumentalnych:&nbsp;<div><div style={{width: `${(trackInfo.instrumentalness*100).toFixed(0)}% `}}></div>{`${(trackInfo.instrumentalness*100).toFixed(0)}%`}&nbsp;</div></div>

                                <div className="trackinfo_acousticness">Szansa, że to utwór akustyczny:&nbsp;<div><div style={{width: `${(trackInfo.acousticness*100).toFixed(0)}%`}}></div>{`${(trackInfo.acousticness*100).toFixed(0)}%`}&nbsp;</div></div>

                                <a className="trackinfo_link"
                                href={`https://open.spotify.com/track/${trackInfo.id}`} 
                                target="_blank"
                                rel="noopener noreferrer">
                                Odtwórz utwór w Spotify
                                </a>

                            </div>
                        </div>
                    </div>
                </>
            :
                null
            }
        </>
    )
}