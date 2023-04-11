
const popularSongsContainer=document.querySelector('.popular-song-container');




document.addEventListener('DOMContentLoaded', getPlaylist);

const APIController= function() {


    console.log('Inside API Controller');

    const clientId= '9128b3ae59084bd89ef41dff500add01';
    const clientSecret='864461b7c5ee48ddb28cc3dfef8da431';

    const getAPIToken= async ()=>{
        const result= await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=9128b3ae59084bd89ef41dff500add01&client_secret=864461b7c5ee48ddb28cc3dfef8da431'
        });

        const data= await result.json();
        console.log("Data API Token: ",data);
        return data.access_token;

    }
    
}


function getPlaylist(){

          let html='';
           fetch('https://api.spotify.com/v1/playlists/6RBZfFTHVD1DlatpQh1eWS', {
            method:"GET",
            headers:{
                'Authorization':'Bearer BQAhIv9fcLo14e8c4r5x_x9DsI4cjL1lNrz9AH7zoOsMoQN4zfD-9OX3yKUTJFTzSpxGDDzR33RjMnqSdEBaxdlC_3YItPl427lDNKL4bslnNqZlKMyM'
            }
           })
           .then(response=> response.json())
           .then(data=>{
              console.log("Response From Get Playlists : ", data);

              data.tracks.items.forEach(listofTracks => {
                     
                  console.log("Track : ", listofTracks);
                   
                    html+=`
                      <li class="songItem">
                        <div class="song-action">
                          <i class="fa-solid fa-heart addToFvt"></i>
                               <img src="${listofTracks.track.album.images[0].url}" alt="Song Poster">
                                     <i class="playListPlay fa-solid fa-circle-play" id="2"></i>
                          </div>
                          <h5>${listofTracks.track.name}
                           <br>
                          <div class="subtitle">${listofTracks.track.artists[0].name}</div>
                        </h5>
                       </li>
                    `;
                    popularSongsContainer.innerHTML=html;
              })

            })

        }