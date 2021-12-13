const inputSearch =  document.getElementById("search-input");
const inputBtn = document.getElementById("search-btn");

//this is when we need to search for new movies
//if the input value changed, all the previos results are deleted
inputSearch.addEventListener("change", function(){
    const movieGrid = document.getElementById("movie-grid")
    movieGrid.innerHTML = '';
    //set the total movies to an empty string
    document.querySelector("h5").innerHTML = '';
    }
)

//event listener to fetch the api
if(inputBtn){
        inputBtn.addEventListener("click", function() {
            getApi()
        })
    }

    //fetch the api with the input value concatenated 
const getApi = async () => {
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=d67c387a&s=" + inputSearch.value);
        const data = await response.json();
        console.log(data)
        displayMovie(data)
    }
    catch(e) {
        //if the api is faulted, user can see this text
        document.querySelector("h5").innerText = "Something went wrong!";
        // lets check the error
        console.log(e)
    }
}

//this func creates new elements and appends the data to them
const displayMovie = (data) => {
    //total movies shown
    let total = document.querySelector("h5");
        total.append("Total movies " + data.Search.length)
    const movies = data.Search.map(movie => {
        //this is where we put the movies in
        let row = document.getElementById("movie-grid");
        //each movie poster is put into a div element with 
        //bootstrap class col
        let col = document.createElement("div");
        col.className = "col mt-2";
        row.append(col);
        //inside each col we will insert img tag with attrb of poster
        let elem = document.createElement("img");
        elem.setAttribute("src", movie.Poster);
        col.append(elem)

    });
    console.log(movies);
}