import { Link, useNavigate } from 'react-router-dom';
import { Utils } from '../utils';
import { Dom } from '../utils/Dom';
import { Services } from '../services';

export function Header(props) {
    const user = Utils.Auth.getUser() ?? {};

    const profilImg = (!user.profil_img_url || user.profil_img_url === "") ? 
    "http://via.placeholder.com/500x500" : user.profil_img_url;

    const navigate = useNavigate();

    const handleLogoutClick = e => {
        e.preventDefault();
        Services.AuthService.logout();
        Utils.Auth.removeSessionToken()
        navigate('/connexion');
    }
    return (
        <div className="slim-header">
            <div className="container px-5">
                <div className="slim-header-left">
                    {/* <i className='fa fa-search mr-3' ></i>
                    Recherche */}
                </div>
                <div className="slim-header-right">
                    <div className="dropdown dropdown-c">
                        <span className="logged-user" onClick={e => 
                            Dom.toggleElement('#dropdownMenu')} role='button'>
                            <img src={profilImg} alt='' style={{objectFit: 'cover'}}/>
                            <span>{user.firstname} {user.lastname}</span>
                            <i className="fa fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" id="dropdownMenu">
                            <nav className="nav">
                                <Link to="/profil" className="nav-link">
                                    <i className="icon ion-person"></i> Mon profil
                                </Link>
                                {/* <Link to="/notifications" className="nav-link">
                                    <i className="icon ion-ios-bell"></i> Notifications
                                </Link> */}
                                <span className="nav-link text-danger" onClick={handleLogoutClick} role='button'>
                                    <i className="icon ion-forward text-danger"></i> Se deconnecter
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}