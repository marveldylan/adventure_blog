import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <nav>
            <div className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/post" className="nav-item">Post</Link>
            <Link to="/createpost" className="nav-item"> Create a Post</Link>
            </div>
        </nav>
    )
}

export default Nav