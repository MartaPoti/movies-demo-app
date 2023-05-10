function showLatest(response){
   
    let movieName=(response.data.results[0].title)
    let h2=document.querySelector("h2")
    h2.innerHTML=`${movieName}`
    console.log (movieName)
    let posterUrl=(response.data.results[0].poster_path)
    let imgUrl = document.querySelector(".imgUrl")
    posterUrl.innerHTML=`${posterUrl}`

}

function handleResponse(){

let apiUrl=`https://api.themoviedb.org/3/movie/popular?api_key=f4033fbfcd1a898a9df69ab26c3f137d`
axios.get(apiUrl).then(showLatest);
}


handleResponse();