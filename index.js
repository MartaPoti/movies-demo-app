function showPopular(response){
   
    let movieName=(response.data.results[0].title)
    let h2=document.querySelector("h2")
    h2.innerHTML=`${movieName}`
    console.log (movieName)
    let posterUrl=`https://image.tmdb.org/t/p/original/${(response.data.results[0].poster_path)}`
   // let imgUrl = document.querySelector(".imgUrl")
   // document.
   // imgUrl.innerHTML=`${posterUrl}`

    //let description=document.querySelector(".description")
    //description.innerHTML=(response.data.results[0].overview)

    document.getElementById("img").src=posterUrl

}

function handleResponse(){

let apiUrl=`https://api.themoviedb.org/3/movie/popular?api_key=f4033fbfcd1a898a9df69ab26c3f137d`
axios.get(apiUrl).then(showPopular);
}


handleResponse();