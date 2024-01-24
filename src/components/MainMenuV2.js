import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

export function MainmenuV2(props){
    return (
        <div className="slim-sidebar">
            <h2 className="text-center py-3">
                <Link to="/"><img src={logo} height="55px" alt=""/></Link>
            </h2>

            <ul className="nav nav-sidebar mt-5 px-3">
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/" className="sidebar-nav-link rounded">
                        <i className="icon ion-ios-keypad"></i> Dashbaord
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/formations" className="sidebar-nav-link rounded">
                    <i className="icon ion-university"></i> Formations
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/mon-cv" className="sidebar-nav-link rounded">
                    <i className="icon ion-android-document"></i> Voir mon cv
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="mon-salaire" className="sidebar-nav-link rounded">
                    <i className="icon fa fa-money"></i> Mon salaire
                    </NavLink>
                </li>
                <li className="sidebar-nav-item my-2">
                    <NavLink to="/profil" className="sidebar-nav-link rounded">
                    <i className="icon ion-ios-gear-outline"></i> Profil
                    </NavLink>
                </li>

            </ul>
      </div>
    )
}