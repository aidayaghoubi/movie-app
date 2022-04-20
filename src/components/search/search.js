import { useState , useContext , useEffect } from "react";
const API = 



const SearchMovie = () => {

    const [movie , setMovie] = useState('');
    
    useEffect(()=>{
     
    } , [movie])


    const onSearchBtnClickHandler = () => {

    }

    http://www.omdbapi.com/?t=tt3896198&apikey=537d549a=inception&
    const onInputChangeHandler = ({target : {value}}) => {
        setMovie(value)
       
    }

    return (
        <div>
            <input type="text" value={movie} onChange={onInputChangeHandler}></input>
            <button onClick={onSearchBtnClickHandler}>search</button>
        </div>
    )
}

export default SearchMovie;