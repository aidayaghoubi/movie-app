import { Link } from "react-router-dom"

const Header = () => {


    return <div>
        <ul>
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/favorite'}>Favorite</Link>
            </li>
            <li>
                <Link to={'/last-checked'}>Last Checked</Link>
            </li>
            <li>
                <Link to={'/watch-list'}>Watch List</Link>
            </li>
        </ul>
    </div>
}

export default Header