
const popularSongsContainer=document.querySelector('.popular-song-container');
const topArtistContainer=document.querySelector('.artist-container');
const artistAction=document.querySelector('.artist-container');


document.addEventListener('DOMContentLoaded', getPlaylist);

const APIController= function() {
    https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z?si=a3e571c01ee14aaa

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
                'Authorization':'Bearer BQAILb-vn1lfDCFkt22j1sScYyO_d7FMo2vu4hgPWGuyIASGUPI7k9alxA--jSNW40HEYEBFhm0f7beiFNlNwD6IbOhsAS1hMHIBL0bBSYZ_E_VDjgWe'
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

            getTopArtist();

        }


    function getTopArtist(){
        let html='';
        fetch('https://api.spotify.com/v1/artists?ids=7bXgB6jMjp9ATFy66eO08Z,6LuN9FCkKOj5PcnpouEgny,0hCNtLu0JehylgoiP8L4Gh,55Aa2cqylxrFIXC767Z865,26VFTg2z8YR0cCuwLzESi2,27FGXRNruFoOdf1vP8dqcH,0z4gvV4rjIZ9wHck67ucSV,6eUKZXaKkcviH0Ku9w2n3V,3TVXtAsR1Inumwj472S9r4',{   
        method:"GET",
            headers:{
                'Authorization':'Bearer BQAILb-vn1lfDCFkt22j1sScYyO_d7FMo2vu4hgPWGuyIASGUPI7k9alxA--jSNW40HEYEBFhm0f7beiFNlNwD6IbOhsAS1hMHIBL0bBSYZ_E_VDjgWe'
            }
        })
        .then(response=> response.json())
        .then(data=>{
           console.log("Response Top Artits: ", data);
                data.artists.forEach(listOfArtist=>{
                    console.log("Artits: ", listOfArtist);
                    html+=`
                     <li class="artist-Item">
                     <a href="/favourites/add/?id=${listOfArtist.id}&type=Post" class="fvt-btn"> <i class="fa-solid fa-heart addToFvt-artist"></i></a>
                       <img src="${listOfArtist.images[0].url}" alt="${listOfArtist.name}">
                        <h5>${listOfArtist.name}</h5>
                    </li>
                    `;
                    
                    topArtistContainer.innerHTML=html;

                })
        })
    

    }



// $('#fvt-btn').click(addToFvt);

//    function addToFvt(e){
//     e.preventDefault();
//     console.log("Inside add to Fvt Function");
//     let self = this;

//     // this is a new way of writing ajax which you might've studied, it looks like the same as promises
//     $.ajax({
//         type: 'POST',
//         url: $(self).attr('href'),
//     })
//     .done(function(data){
//         console.log("Daata :", data);
//     })
    
            
//   }


    // let addToFavourite=function(){

    //    let artist=$('.addToFvt-artist');
    //    console.log("Inside add to fvt function")
    //    artist.click(function(e){
    //       e.preventDefault();
    //         $.ajax
    //      })
    // }
  
    // addToFavourite();