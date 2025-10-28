import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
    const handleSignOut = () => {
        // Clear common auth keys — adjust if your app uses different keys
        try {
            localStorage.removeItem('authToken');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (e) {
            // ignore storage errors
            console.error('Error clearing storage during sign out', e);
        }
        // Option 1: reload to reset app state
        window.location.href = '/';
    };

    return (
    <nav className="navbar">
        <h1 className="logo-text">Sai.Portfolio</h1>
        <div className="nav-menu">
            <Link activeClass='active' to="Homepage" spy={true} smooth={true} offset={-100} duration={500} className="Display">HOME</Link>
            <Link activeClass='active' to="about" spy={true} smooth={true} offset={-70} duration={500}  className="Display">WORK</Link>
            <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-60} duration={500}  className="Display">PROJECTS</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="Display">SKILLS</Link>
            <Link activeClass='active' to="earnings" spy={true} smooth={true} offset={-100} duration={500}  className="Display">CERTIFICATIONS</Link>
        </div>
    </nav>
    );
}

export default Navbar;
