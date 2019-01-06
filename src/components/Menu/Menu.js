import React from "react";
import { NavLink } from "react-router-dom";

const menu = [
    {
        link: "/",
        name: "Books"
    },
    {
        link: "/movies",
        name: "Movies"
    },
    {
        link: "/games",
        name: "Games"
    },
    {
        link: "/foods",
        name: "Foods"
    },

]
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">My Collection</h1>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                {
                    menu.map(item => (<li key={item.name} className="nav-item"><NavLink activeClassName="nav-link--active" exact to={item.link}>{item.name}</NavLink></li>))
                }
                </ul>
            </div>
        </nav>

    )
}

export default Menu;
