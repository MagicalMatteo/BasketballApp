import { Link } from "react-router-dom"
function Navbar(){
    return <nav className = "navbar">
        <div className = "navbar-brand">
            <Link to = "/">Basketball Trainer</Link>
        </div>
        <div className = "navbar-links">
            <Link to="/" className="nav-link"> Home </Link>
            <Link to="/Exercises" className="nav-link"> Exercises</Link>
            <Link to="/Review" className="nav-link"> Review</Link>
        </div>
    </nav>
}
export default Navbar