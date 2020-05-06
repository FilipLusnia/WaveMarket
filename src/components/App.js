import React, {useState, useEffect} from "react";
import "../scss/main.scss";
import Searchbar from "./Searchbar";
import TrackInfo from "./TrackInfo";

export default class App extends React.Component {

  constructor(props){
    super(props) 

    this.state = {
      authToken: null,
      currId: null
    }

    this.client_id = "fb185e2943374c65b6cdc939c506b3c1"; 
    this.client_secret = "7211f605e1274061ad0808b8f2da4fed";
  }

  componentDidMount(){
    this.reciveAuthToken();
  }

  reciveAuthToken = ()=> {
    const request = require("request");

    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Authorization": "Basic " + (new Buffer(this.client_id + ":" + this.client_secret).toString("base64"))
      },
      form: {
        grant_type: "client_credentials"
      },
      json: true
    };

    request.post(authOptions, (error, response, body)=> {
              
      if (!error && response.statusCode === 200) {
        const token = body.access_token;
        this.setState({authToken: token});
      }
    })
  }
  
  getId = (id)=> {
    this.setState({currId: id});
  }

  render() {
    return(
      <div className="App">
        <div>
          <TrackInfo
            client_id = {this.client_id}
            client_secret = {this.client_secret}
            currId = {this.state.currId}
            authToken = {this.state.authToken}
          />
        </div>
        <Searchbar className="e"
          client_id = {this.client_id}
          client_secret = {this.client_secret}
          getId = {this.getId}
          authToken = {this.state.authToken}
        />
      </div>
    )
  }
}