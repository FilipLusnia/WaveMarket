import React from "react";
import "../scss/main.scss";

export default function Track({title, artist, cover, getId, id}) {

    return (
        <div className="list_item list_item-animate" onClick={()=> getId(id)}>
            <img src={cover} alt="cover" height="200" width="200" className="list_item-cover"/>
            <h1 className="list_item-title">{title}</h1>
            &nbsp;
            <h4 className="list_item-artist">{artist}</h4>
        </div>
    );
}
