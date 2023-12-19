import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import { useState } from "react";
import { Utils } from "../utils";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";

export function LoginView(props){
    const aborController = new AbortController();

    const [searchParams, setSearchParams] = useSearchParams();
    const useUser = Hooks.useUser();

    const [errorMessages, setErrorMessages] = useState([]); 

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useUser.setIsDisabled(true);
        
        try {
            const payload = {
                email: useUser.email,
                password: useUser.password,
            };

            const response = await Services.AuthService.login(
                JSON.stringify(payload), aborController.signal)
    
            Utils.Auth.setUser(response.user);
            Utils.Auth.setSessionToken(response.tk);

            window.location.replace(`${searchParams.get('from') ?? "/"}`);
        } catch (error) {
            // Utils.Error.handleError(error);
            
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        } finally {
            useUser.setIsDisabled(false)
        }

    }


    return (
        <Layout.AuthLayout>
            <div className="signin-right">
                <div className="signin-box">
                    <h2 className="signin-title-primary">Connexion !</h2>
                    <h3 className="signin-title-secondary">Connectez vous à votre compte.</h3>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.LoginForm useUser={useUser} handleSubmit={handleRegisterSubmit}
                    isDisabled={useUser.isDisabled}/>
                </div>

                </div>
                <div className="signin-left d-md-block d-sm-non">
                    <Components.AuthLeftSide />
                </div>
        </Layout.AuthLayout>
    )
}