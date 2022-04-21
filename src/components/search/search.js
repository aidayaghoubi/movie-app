import { useState, useContext, useEffect, useCallback } from "react";
import { debounce } from "lodash";
// const API = http://www.omdbapi.com/?t=${inception}&apikey=537d549a;



const SearchMovie = () => {

    const [movie, setMovie] = useState('');
    const [searchedMovie, setsearchedMovie] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState()


    useEffect(() => {

        // (async () => {
        //     const result = await searchMovie(movie)
        //     console.log(result)
        // })();
        if (movie) {
            setLoading(true)
            searchMoviee(movie.toLowerCase()).then(response => {
                setsearchedMovie(response);
                setLoading(false);
                if(response.Response === "False" && response.Error === "Too many results."){
                    setStatus("to many result")
                }else if(response.Response === "False"){
                    setStatus("not found")
                }else setStatus('')
            })
        }

    }, [movie])


    const searchMoviee = (name) => {
        const data = fetch(`http://www.omdbapi.com/?apikey=d0643695&s=${name}`)
            .then(res => res.json())
        return data

    }

    // async function searchMovie(name) {
    //     const res = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=537d549a`);
    //     const response = await res.json();
    //     return response
    // https://omdbapi.com/?apikey=d0643695&s=2070
    // }
    console.log(searchedMovie)

    //top movies == https://imdb-api.com/en/API/Top250Movies/k_t7nsiycr
    //top tv series ==  https://imdb-api.com/en/API/Top250TVs/k_t7nsiycr
    // coming soon == https://imdb-api.com/en/API/ComingSoon/k_t7nsiycr
    // most poplar == https://imdb-api.com/en/API/MostPopularMovies/k_t7nsiycr

    //slider https://www.npmjs.com/package/react-awesome-slider

    const onSearchBtnClickHandler = () => {

    }


    const onInputChangeHandler = ({ target: { value } }) => {
        setMovie(value)
        handler()
    }

    const handler = useCallback(debounce(()=>{} , 100000), [] )
   
    return (
        <div>
            <input type="text" value={movie} onChange={onInputChangeHandler}></input>
            <button onClick={onSearchBtnClickHandler}>search</button>
            <p>{status}</p>
            <p>{loading && "loading..."}</p>
           
             {searchedMovie?.Search?.map(el => {return  <div>
                 <img src={el.Poster} />
                 <p>{el.Title}</p>
             </div>
             })}
           
        </div>
    )
}

export default SearchMovie;