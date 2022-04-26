import Container from "../main/container"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styledComponents from "styled-components"

const DivStyled = styledComponents.div`
backgroundColor:blue;

`


const Movie = () => {

    let { id } = useParams()
    const [movie, setMovie] = useState(id)

    useEffect(() => {

        if (id) {
            searchMoviee(movie).then(response => {
                setMovie(response);
            })
        }
    }, [])


    const searchMoviee = (name) => {
        const data = fetch(`http://www.omdbapi.com/?apikey=d0643695&s=${name}`)
            .then(res => res.json())
        return data
    }

    return <Container>
        {(movie !== id) && movie?.Search.slice(0, 1).map(el => <DivStyled>
            <p>{el?.Title}</p>
            <p>{el?.Year}</p>
            <img src={el?.Poster} />
        </DivStyled>
        )}
    </Container>


}

export default Movie