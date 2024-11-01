const clientID = 'd511528d911b44e9a81863869ee60809';
const redirectURL = 'https://aegisen.github.io/peanusbutter/';
const scope = ["user-read-email", "playlist-modify-pubilc", "playlist-modify-private", "playlist-read-private", "playlist-read-collaborative"];


var Spotify = require('spotify-web-api-js');




export const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${perms.join('%20')}&response_type=token&show_dialog=false`;
export const accessToken = window.location.hash.split('&')[0].split('=')[1];
export const spotifyApi = new Spotify().setAccessToken(clientID);