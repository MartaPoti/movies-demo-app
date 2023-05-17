
        
const today = new Date()


const f = new Intl.DateTimeFormat("en-us",{
    dataStyle: "full"

})

function formatDate(today){


    
let date=f.format(today)
console.log(date)



let dateElement = document.querySelector("#date");
dateElement.innerHTML = f.format(today)

}

function showPopular(response){

    let movies=(response.data.results)
   
    let cardElement=document.querySelector("#cards")

    let cardHTML="";
    cardHTML=cardHTML + `<div class="cardsContainer grid grid-1-1-1">`

    movies.forEach(function (movie,index) {
        if (index>0 && index<16)

        cardHTML=cardHTML + `
        
         <div class="kard grid-card" >
               
                    <h2 class="movie-name">${movie.title}</h2>
                    <p>${movie.overview}</p>
             
              

                <div class="poster">
                    <img
                  src="https://image.tmdb.org/t/p/original/${(movie.poster_path)}"
                  alt=${movie.title}
                  id="movie-poster"
                  class="img-resp"
                    />
                </div>
                
         </div>
       
        `
    }
    
    
    
    )


    cardHTML=cardHTML + `</div>`,

    cardElement.innerHTML= cardHTML

}

function handleResponse(){

let apiUrl=`https://api.themoviedb.org/3/movie/popular?api_key=f4033fbfcd1a898a9df69ab26c3f137d`
axios.get(apiUrl).then(showPopular);
}


handleResponse();
formatDate(today);





