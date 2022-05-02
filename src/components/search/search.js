import { useState, useContext, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { SearchHistory } from "../../store/search-history";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { Modal , Button } from "antd";

// const API = http://www.omdbapi.com/?t=${inception}&apikey=537d549a;
const SearchBox = styled.div`
margin: 17px 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;

& .movie_result{
    background-color: white;
    border-radius: 19px;
    max-height: 517px;
    overflow: auto;
    margin-top: 11px;
    width: 86%;
     
    & .movie{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin:13px;
        text-decoration: none;

        & img{
            height: 105px;
            border-radius: 5px;
            max-width: 74px;
        }
        & div{

            margin: 0 11px;
            & p{
                margin: 4px;
                padding: 0;
                color:#646765;
                
            }
        }
    }
}

& .input{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

   

    & input{
        border-radius: 19px;
        border: none;
        border-color: #adaeb3;
        color: #686874;
        width: 68%;
        height: 46px;
        padding-left: 45px;
        font-size: 17px;
        background-color: #fff;
        box-shadow: 1px 1px 5px #d3d2d2;
    }

    & span{
        position: absolute;
        top: 13px;
        left: 44px;
    }

}
.example{
    margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

`

const SearchMovie = () => {

    const [movie, setMovie] = useState('');
    const [searchedMovie, setsearchedMovie] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState();

    const navigate = useNavigate()

    const SearchCtx = useContext(SearchHistory);

    useEffect(() => {

        if (movie) {
            setLoading(true)
            searchMoviee(movie.toLowerCase()).then(response => {
                setsearchedMovie(response);
                setLoading(false);
                if (response.Response === "False" && response.Error === "Too many results.") {
                    setStatus("to many result")
                } else if (response.Response === "False") {
                    setStatus("not found")
                } else setStatus('')
            })
        }
    }, [movie])


    const searchMoviee = (name) => {
        const data = fetch(`http://www.omdbapi.com/?apikey=d0643695&s=${name}`)
            .then(res => res.json())
        return data

    }


    const onMovieClickHandler = (props) => {
        SearchCtx.addToState(props.el.Title.toLowerCase());
        navigate(`/movie/:${props.el.Title}`)

    }


    //top movies == https://imdb-api.com/en/API/Top250Movies/k_t7nsiycr
    //top tv series ==  https://imdb-api.com/en/API/Top250TVs/k_t7nsiycr
    // coming soon == https://imdb-api.com/en/API/ComingSoon/k_t7nsiycr
    // most poplar == https://imdb-api.com/en/API/MostPopularMovies/k_t7nsiycr
    //slider https://www.npmjs.com/package/react-awesome-slider


    const onInputChangeHandler = ({ target: { value } }) => {
        setMovie(value)
        handler()
    }

    const handler = useCallback(debounce(() => { }, 100000), [])

    return (

        <SearchBox>
            <div className="input">
                <input
                    placeholder="Search"
                    type="text"
                    value={movie}
                    onChange={onInputChangeHandler}>

                </input>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.397" height="22.354" viewBox="0 0 20.397 22.354">
                        <g id="Group_10" dataName="Group 10" transform="translate(-6889 4759)">
                            <g id="Ellipse_101" dataName="Ellipse 101" transform="translate(6889 -4759)" fill="none" stroke="#707070" strokeWidth="2">
                                <circle cx="9.5" cy="9.5" r="9.5" stroke="none" />
                                <circle cx="9.5" cy="9.5" r="8.5" fill="none" />
                            </g>
                            <path id="Path_739" dataName="Path 739" d="M6875.251-4737.578l3.451,4.753" transform="translate(29.298 -5.218)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="2" />
                        </g>
                    </svg>

                </span>
            </div>
{/* 
            <p>{status}</p>
            {
                loading && <div className="example">
                    <Spin />
                </div>
            } */}
            <div className="movie_result">
                {searchedMovie?.Search?.map((el, i) => {
                    return <a href="#" className="movie" onClick={() => onMovieClickHandler({ el, i })} key={i}>
                        <img src={el.Poster} />
                        <div>
                            <p>{el.Title}</p>
                            <p>{el.Year}</p>
                            <p>{el.Type}</p>

                        </div>
                    </a>
                })}

            </div>

        </SearchBox>
    )
}

export default SearchMovie;