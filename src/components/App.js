import React from "react";
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

    this.client_id = process.env.REACT_APP_client_id; 
    this.client_secret = process.env.REACT_APP_client_secret;
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

  removeId = ()=> {
    this.setState({currId: null});
  }

  render() {
    return(
      <div className="App">
        <div className="trackinfo">
          <TrackInfo
            client_id = {this.client_id}
            client_secret = {this.client_secret}
            currId = {this.state.currId}
            authToken = {this.state.authToken}
            removeId = {this.removeId}
          />
        </div>
        <div className="searchbar">
          <Searchbar
            client_id = {this.client_id}
            client_secret = {this.client_secret}
            getId = {this.getId}
            authToken = {this.state.authToken}
          />
        </div>
      </div>
    )
  }
}