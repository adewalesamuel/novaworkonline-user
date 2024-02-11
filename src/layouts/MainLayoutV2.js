import { useNavigate, useLocation } from "react-router-dom";
import { Utils } from "../utils";
import { useEffect } from "react";
import { Components } from "../components";

export function MainLayoutV2(props){
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        const from = pathname !== '/' ? "?from=" + pathname : '';
        if (!Utils.Auth.isLoggedIn()) navigate(`/inscription${from}`, {replace: true});
    })
    if (!Utils.Auth.isLoggedIn()) return null;

    return (
        <>
            <div className="slim-body">
                <Components.MainmenuV2 />
                <div className="slim-mainpanel">
                <Components.Header />
                    <div className="container">
                        {props.children}
                    </div>
                    <div className="slim-footer mg-t-0">
                        <div className="container-fluid">
                            <p>Copyright 2023 &copy; Novawork online tous droits réservés</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}