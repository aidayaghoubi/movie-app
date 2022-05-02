import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styledComponents from "styled-components"
import Container from "../main/container"

const MovieListStyled = styledComponents.div`

flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
display: flex;
align-items: center;

.movie{
    width: 234px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 15px 15px;
    height: 330px;
    border-radius: 13px;
    padding: 0px;

    .inner-wraper{

        .titlee{
            & p{
                padding: 0 34px;

            }
        }

        .imdb{
            justify-content: center;
            display: flex;
            align-items: center;

            & span{
                margin-left: 8px;
            }
            & p{
                font-size: 14px;
                background-color: #ffcb00;
                padding: 4px 5px;
                border-radius: 11px;
                font-weight: bold;
            }
        }
    }
}

`

const MovieList = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [movies, setMovies] = useState()

    const onMovieClickHandler = (props) => {

        navigate(`/movie/${props.title}`);

    }

    useEffect(() => {
        if (id === "Most Popular") {
            fetch("https://imdb-api.com/en/API/MostPopularMovies/k_t7nsiycr")
                .then(res => res.json())
                .then(res => setMovies(res))
        } else {
            fetch("https://imdb-api.com/en/API/ComingSoon/k_t7nsiycr")
                .then(res => res.json())
                .then(res => setMovies(res))
        }
    }, [])

    return <Container>
        <MovieListStyled>
            {
                movies?.items?.map((el, i) => {
                    return <div className="movie" key={i} onClick={() => onMovieClickHandler(el)}>
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
                })
            }
        </MovieListStyled>
    </Container>

}

export default MovieList