import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MENU_LIST } from "../lib";
import Logo from '../assets/images/logo.png';
import { setMenuInfo } from "../store/slice/menu";


export default function Header() {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toHome = () => {
        if(active) controlMenu();
        navigate('/');
    };

    const clickHandler = (path: string) => {
        if(active) controlMenu();
        dispatch(setMenuInfo({ type: path }))
        navigate(path);
    };

    const controlMenu = () => {
        setActive((prevState) => {
            return !prevState;
          });
    };

    useEffect(() => {
        if (active) {
            document.querySelector(".hamburger").classList.toggle("active");
            document.querySelector(".navbar_menu").classList.toggle("active");
        } else {
            document.querySelector(".hamburger").classList.remove("active");
            document.querySelector(".navbar_menu").classList.remove("active");
        }
      }, [active]);

    return (
        <div className = "header">
            <nav className = "navbar">
                <img className = "navbar_logo" onClick = { toHome } src = { Logo } alt = "logo"/>
                <ul className = "navbar_menu">
                    {
                        MENU_LIST.map((item) => {
                            return (
                                <li key = { item.name } className = "navbar_item" onClick = { () => { clickHandler(item.path);
                                }}>{ item.name }</li>
                            )
                        })
                    }
                </ul>
                <div className = "hamburger" onClick = {controlMenu}>
                    <span className = "hamburger_bar"></span>
                    <span className = "hamburger_bar"></span>
                    <span className = "hamburger_bar"></span>
                </div>
            </nav>
        </div>
    );
}



