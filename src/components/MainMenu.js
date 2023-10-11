import { Link } from "react-router-dom";

export function MainMenu(props){
    return (
        <div className="slim-navbar">
            <div className="container">
                <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    <i className="icon ion-ios-home-outline"></i>
                    <span>Tableau de bord</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/formations">
                    <i className="icon ion-ios-book-outline"></i>
                    <span>Formations</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/notifications">
                    <i className="icon ion-ios-chatboxes-outline"></i>
                    <span>Notifications</span>
                    <span className="square-8"></span>
                    </Link>
                </li><li className="nav-item">
                    <Link className="nav-link" to="mon-cv">
                    <i className="icon ion-clipboard"></i>
                    <span>Voir mon CV</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profil">
                    <i className="icon ion-ios-gear-outline"></i>
                    <span>Profil</span>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    )
}