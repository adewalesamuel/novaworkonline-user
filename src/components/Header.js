import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { Utils } from '../utils';
import { Dom } from '../utils/Dom';
import { Services } from '../services';

export function Header(props) {
    const user = Utils.Auth.getUser() ?? {};
    const navigate = useNavigate();

    const handleLogoutClick = e => {
        e.preventDefault();
        Services.AuthService.logout();
        Utils.Auth.removeSessionToken()
        navigate('/connexion');
    }
    return (
        <div className="slim-header">
            <div className="container">
                <div className="slim-header-left">
                <h2 className="slim-logo">
                    <a href="index.html">
                    <img src={logo} height="40px" alt=""/>
                    </a>
                </h2>

                <div className="search-box">
                    <input type="text" className="form-control" placeholder="Rechercher" />
                    <button className="btn btn-primary"><i className="fa fa-search"></i></button>
                </div>
                </div>
                <div className="slim-header-right">
                <div className="dropdown dropdown-c">
                    <span className="logged-user" onClick={e => Dom.toggleElement('#dropdownMenu')}>
                        <img src="http://via.placeholder.com/500x500" alt=''/>
                        <span>{user.firstname} {user.lastname}</span>
                        <i className="fa fa-angle-down"></i>
                    </span>
                    <div className="dropdown-menu dropdown-menu-right" id="dropdownMenu">
                    <nav className="nav">
                        <Link to="/profil" className="nav-link">
                            <i className="icon ion-person"></i> Mon profil
                        </Link>
                        <span className="nav-link" onClick={handleLogoutClick}>
                            <i className="icon ion-forward"></i> Se deconnecter
                        </span>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}