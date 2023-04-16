
const popularSongsContainer=document.querySelector('.popular-song-container');
const topArtistContainer=document.querySelector('.artist-container');
const artistAction=document.querySelector('.artist-container');

artistAction.addEventListener('click', checkAristEvent);

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
                'Authorization':'Bearer BQDBK6x_maYtrIT4sy517DB7nVf7lm_8ichYAKRX-9XUgm5nwOMrPocFwWN3eo9jwpEs3TOMbKV_5EEt_zAEkqwOjztbO5r2_lHQxmCg08zmbc_bil_w'
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
                'Authorization':'Bearer BQBmBrDCKFNI-vMo0yGsbj83x7NPK7orPC1KkHV1GXcs_5JUliM2kXwW7P2KPCGBZvT_8DRzjqwbyTZnwGVhEFx6kfNE0-xiCKbzmAFEJz83rdWbOLRN'
            }
        })
        .then(response=> response.json())
        .then(data=>{
           console.log("Response Top Artits: ", data);
                data.artists.forEach(listOfArtist=>{
                    console.log("Artits: ", listOfArtist);
                    html+=`
                     <li class="artist-Item">
                     <a href="" method="POST" class="fvt-btn"> <i class="fa-solid fa-heart addToFvt-artist"></i></a>
                       <img src="${listOfArtist.images[0].url}" alt="${listOfArtist.name}">
                        <h5>${listOfArtist.name}</h5>
                    </li>
                    `;
                    
                    topArtistContainer.innerHTML=html;

                })
        })
    

    }

    function checkAristEvent(e){
      e.preventDefault();
      console.log("Artist Event Selected",e.target);
      const item=e.target;
      console.log("Item :", item);
       if(item.classList[2]=="addToFvt-artist"){ 
           console.log('Add to Favourite..........')

           $.ajax({
            type:'post',
            url:'/favourites/add',
            success: function(data){

                console.log(data)

            }, error: function(err){
                console.log(error.responseText);
            }
           })
           
        }
    }



    // let addToFavourite=function(){

    //    let artist=$('.addToFvt-artist');
    //    console.log("Inside add to fvt function")
    //    artist.click(function(e){
    //       e.preventDefault();
    //         $.ajax
    //      })
    // }

    // addToFavourite();