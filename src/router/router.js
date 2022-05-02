import { Link, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Favorite from "../pages/favorite"
import LastChecked from "../pages/last-checked"
import WatchList from "../pages/watch-list";
import Movie from "../pages/movie";
import SearchPriveder from "../store/search-history";
import MovieList from "../pages/movie-list";

const Router = () => {


    return <SearchPriveder>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/last-checked" element={<LastChecked />} />
            <Route path="/watch-list" element={<WatchList />} />
            <Route path="/list/:id" element={<MovieList/>} />
            <Route path="/movie/:id" element={<Movie />} />
        </Routes>
    </SearchPriveder>
}

export default Router