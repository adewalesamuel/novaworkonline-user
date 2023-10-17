import { NavLink } from "react-router-dom";

export function MainMenu(props){
    return (
        <div className="slim-navbar">
            <div className="container">
                <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="">
                    <i className="icon ion-ios-home-outline"></i>
                    <span>Tableau de bord</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/formations">
                    <i className="icon ion-ios-book-outline"></i>
                    <span>Formations</span>
                    </NavLink>
                </li>
               <li className="nav-item">
                    <NavLink className="nav-link" to="mon-cv">
                    <i className="icon ion-clipboard"></i>
                    <span>Voir mon CV</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profil">
                    <i className="icon ion-ios-gear-outline"></i>
                    <span>Profil</span>
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>
    )
}