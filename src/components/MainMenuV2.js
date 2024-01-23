import { Link, NavLink } from "react-router-dom";

export function MainmenuV2(props){
    return (
        <div className="slim-sidebar">
            <label className="sidebar-label">Navigation</label>

            <ul className="nav nav-sidebar">
                <li className="sidebar-nav-item">
                    <NavLink to="/" className="sidebar-nav-link">
                        <i className="icon ion-ios-home-outline"></i> Tableau de blord
                    </NavLink>
                </li>
                <li className="sidebar-nav-item">
                    <NavLink to="/formations" className="sidebar-nav-link">
                    <i className="icon ion-ios-book-outline"></i> Formation
                    </NavLink>
                </li>
                <li className="sidebar-nav-item">
                    <NavLink to="/mon-cv" className="sidebar-nav-link">
                    <i className="icon ion-clipboard"></i> Voir mon cv
                    </NavLink>
                </li>
                <li className="sidebar-nav-item">
                    <NavLink to="/profil" className="sidebar-nav-link">
                    <i className="icon ion-ios-gear-outline"></i> Voir mon cv
                    </NavLink>
                </li>

            </ul>
      </div>
    )
}