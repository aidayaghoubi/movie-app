import Slider from "./slider"
import teatherJson from '../components/teather.json'
import MovieJson from '../components/topMovies.json'
import TVjson from '../components/topTv.json'
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieSlider from "./movieSlider"

const LinkStyled = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 2px;
margin-bottom: 15px;


& div{
    margin-top: 19px;
    margin-right: 25px;
    font-size: 19px;
    font-weight: bold;
    color: #919191;
    cursor:pointer;
    transition: 0.2s;
}
& .active{
color:black;
font-size: 20px;
text-shadow: 1px 1px 2px #b5b5b5;
}

`

const RightSide = () => {

    const items = ["TV shows", "Movies", "Thether"];
    const [state, setState] = useState("TV shows");

    const [movies, setMovies] = useState(() => {
        return state === "TV shows" ? TVjson : state === "Movies" ? MovieJson : teatherJson
    })

    const onLinkClickHandler = (props) => {
        setState(props)
    }

    useEffect(() => {
        setMovies(()=>{
            return state === "TV shows" ? TVjson : state === "Movies" ? MovieJson : teatherJson
        })
    }, [state])

    // const images = movies.items.slice(0,5).map(el => el.image)
    

    

    const Tiltles = items.map((el, i) => {
        return <div 
            className={state === el && "active"} 
            key={i} 
             onClick={() => onLinkClickHandler(el, i)}>
            {el}
        </div>
    })


    return <>
        <LinkStyled className="title-wraper">
            {Tiltles}
        </LinkStyled>
        <Slider items={state} />
        <MovieSlider items={movies} name={state}/>
    </>
}


export default RightSide