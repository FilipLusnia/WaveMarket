import React, {useState, useEffect} from "react";

export default function TrackInfo({client_id, client_secret, currId}){

    const request = require("request");

    const [trackInfo, setTrackInfo] = useState(false);
    

    useEffect(()=> {
    
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
            if (!error && response.statusCode === 200 && currId !== undefined) {
                // use the access token to access the Spotify Web API
                const token = body.access_token;

                fetch (`https://api.spotify.com/v1/audio-features/${currId}`,{
                headers: {
                    "Authorization": "Bearer " + token
                },
                })
                .then(response => response.json())
                .then(data =>  {
                setTrackInfo(data)
                })
            }
        });
    }, [currId])  
    
    return (
        <> 
            {trackInfo !== false ?
                <div>
                    <h1>Średnia wartość LUFS: {trackInfo.loudness.toFixed(1)}</h1>
                </div>
            :
                null
            }
        </>
    );
}