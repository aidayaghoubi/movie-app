import styled from "styled-components"
import { useEffect, useState } from "react"
import SearchMovie from "./search";
import pupjson from '../pup-json.json'
import comjson from '../comingSoon.json'
import { css } from "styled-components";

const Transiton = css`
transotion:0.5s;
`

const BoxStyled = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
${Transiton};
& .wrapper{
    background-color: #fff;
    width: 77%;
    border-radius: 15px;
    margin-top: -9px;
    margin-bottom: 32px;

    & .title{
        padding: 0px 13px;
        margin-top: 16px;
        font-size: 24px;
        font-weight: bold;
        color: #3f4240; 
    }

    & .movie{
        display: flex;
        margin: 16px 13px;
        cursor:pointer;

        & img{
            border-radius: 5px;
            height: 95px;
        }
        & .inner-wraper{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;


            & .imdb {
               
                display: flex;
             
                justify-content:flex-start;
                align-items: center;

                & .relese{
                    background-color:#C3F7DC;
                }

                & span{
                    color: gray;
                    font-size: 19px;
                }
                & p{
                    font-size: 13px;
                    background-color: #F5C518;
                    padding: 4px;
                    border-radius: 8px;
                    font-weight: bold;
                    margin: 6px 8px;
                }
            }
            & .titlee{
                & p{
                    font-size: 19px;
                    margin: 0 5px;
                }
                & span{
                    margin: 2px 2px;
                    padding-left: 4px;
                    color: gray;
                    font-size: 16px;
                    overflow: hidden;
                }
            }
        }
    }

    & .buttom{
        display: flex;
        justify-content: center;
        margin: 14px 0;

        & button{
            font-size: 16px;
            border: none;
            background-color: #41D492;
            width: 90%;
            height: 40px;
            border-radius: 7px;
            color: #fff;
            cursor:pointer;
        }
    }
}

`

const RandomBox = ({ title }) => {

    const Puplaritem = pupjson;
    const Comitem = comjson;
  

    const [movies, setMovies] = useState('')

    // const [state, setState] = useState(() => {
    //     return title === "Most Popular" ? "." : "https://imdb-api.com/en/API/ComingSoon/k_t7nsiycr"
    // })

    // useEffect(() => {

    //     randomMovie().then(response => setMovies(response))

    // }, [state])


    // const randomMovie = () => {
    //     const data = fetch(state)
    //         .then(res => res.json())
    //     return data

    // }

    const Movies = title === "Most Popular" ? Puplaritem?.items?.slice(1, 4).map((el , i) => {
        return <div className="movie" key={i}>
            <img src={el.image} />
            <div className="inner-wraper">
                <div className="titlee">
                    <p>{el.fullTitle}</p>
                </div>
                <div className="imdb">
                    <p>IMDB</p>
                    <span>{el.imDbRating}</span>
                </div>
            </div>
        </div>
    }) : Comitem?.items?.slice(0, 3).map((el , i) => {
        return <div className="movie" key={i}>
            <img src={el.image} />
            <div className="inner-wraper">
                <div className="titlee">
                    <p>{el.title}</p>
                    <span>{el.genres}</span>
                </div>
                <div className="imdb">
                    <p className="relese">{el.releaseState}</p>
                </div>
            </div>
        </div>
    })

    


    return <BoxStyled>
        <div className="wrapper">
            <div className="title">
                {title}
            </div>
            <div className="movies">
                {
                    Movies
                }
            </div>
            <div className="buttom">
                <button>See More</button>

            </div>
        </div>

    </BoxStyled>

}

export default RandomBox