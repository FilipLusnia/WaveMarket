import React, {useState, useEffect} from "react";
import "../scss/main.scss";
import Searchbar from "./Searchbar";
import TrackInfo from "./TrackInfo";

//port default function App() {
//
//const client_id = "fb185e2943374c65b6cdc939c506b3c1"; 
//const client_secret = "7211f605e1274061ad0808b8f2da4fed"; 
//
//const [authToken, setAuthToken] = useState(null);
//
//const [currId, setCurrId] = useState();
//
//
//const reciveAuthToken = ()=> {
//  const request = require("request");
//
//  const authOptions = {
//    url: "https://accounts.spotify.com/api/token",
//    headers: {
//      "Authorization": "Basic " + (new Buffer(client_id + ":" + client_secret).toString("base64"))
//    },
//    form: {
//      grant_type: "client_credentials"
//    },
//    json: true
//  };
//
//  request.post(authOptions, function(error, response, body) {
//            
//    if (!error && response.statusCode === 200) {
//      // use the access token to access the Spotify Web API
//      const token = body.access_token;
//      setAuthToken(token);
//    }
//  })
//}
//
//reciveAuthToken();
//
//
//const getId = (id)=> {
//  setCurrId(id);
//}
//
//return(
//  <div className="App">
//    <TrackInfo
//      client_id = {client_id}
//      client_secret = {client_secret}
//      currId = {currId}
//      authToken = {authToken}
//    />
//
//    <Searchbar 
//      client_id = {client_id}
//      client_secret = {client_secret}
//      getId = {getId}
//      authToken = {authToken}
//    />
//  </div>
//)
//

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
        <Searchbar 
          client_id = {this.client_id}
          client_secret = {this.client_secret}
          getId = {this.getId}
          authToken = {this.state.authToken}
        />
      </div>
    )
  }
}