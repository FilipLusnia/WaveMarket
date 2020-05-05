import React from "react";
import "../scss/Track.scss";

export default function Track({title, artist, cover, getId, id}) {

    return (
        <div className="list_item" onClick={()=> getId(id)}>
            <img src={cover} alt="cover" height="200" width="200"/>
            <h1>{title}</h1>
            &nbsp;
            <h4>{artist}</h4>
        </div>
    );
}
