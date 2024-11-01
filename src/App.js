import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import GetPlaylists from "./components/GetPlaylists";

const CLIENT_ID = "d511528d911b44e9a81863869ee60809";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//const REDIRECT_URL = "http://localhost:3000/";
const REDIRECT_URL = "https://aegisen.github.io/peanusbutter/";
const SPACE_DELIM = "%20";
const SCOPE = [
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public",
                "playlist-modify-private"
              ];
const SCOPES_URL_PARAM = SCOPE.join(SPACE_DELIM);


const getParamsFromAuth = (hash) =>
{
  const stringAferHash = hash.substring(1);
  const paramsInUrl = stringAferHash.split("&");
  const paramsSplitUp = paramsInUrl.reduce((acc, current) => {
    const [key, value] = current.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return paramsSplitUp;
}

const App = () => {
  useEffect( () => {
    if(window.location.hash) {
      const {access_token, expires_in, token_type} = getParamsFromAuth(window.location.hash);
      window.location.hash = "";

      console.log(access_token);

      localStorage.clear(); //store our stuff bc idk im silly
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });


  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };
  return (
      <div className="App">
        <h1>hi</h1> 
          <button onClick = {handleLogin}>Login</button>
          <GetPlaylists />
      </div>
  );
}

export default App;
