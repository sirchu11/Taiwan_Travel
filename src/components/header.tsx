import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';

export default function Header() {

    return (
        <div className = "header">
            <Link to="/" className = "header_link">
                <img className = "header_logo" src = { Logo } alt = "logo"/>
            </Link>
        </div>
    );
}



