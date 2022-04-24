import { useParams  } from "react-router-dom"


const MovieList = () => {

    let{id} = useParams();
    console.log(id)



    return <>
    <p>helow
    </p>
    </>
}

export default MovieList