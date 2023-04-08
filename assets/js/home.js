
document.addEventListener("DOMContentLoaded", loadPage);
const popularSongContainer=document.querySelector('.popular-song-container');

function loadPage(){
   let html='';
    console.log("Loading home started..........")
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '821ece3fdfmshd30503cac88103dp12b4c8jsn31dd84bbb9a1',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then(response => response.json())
		.then(response => 
            console.log(response);

            
            if(response.data){
                data.data.forEach( data => { 
    
              html=`
                   <li class="songItem">
                     <div class="song-action">
                          <img src="/images/1.jpg" alt="Song Poster">
                            <i class="fa-solid fa-circle-play"></i>
                    </div>
                     <h5>${data.title}
                       <br>
                        <div class="subtitle">Alan Walker</div>
                   </h5>
                </li> 
              
              `;
c             
                })

                popularSongContainer.innerHTML=html;
            }

            )
            


}