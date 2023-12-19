import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import logo from '../assets/img/logo.png';
import { useCallback, useEffect, useState } from "react";
import { Utils } from "../utils";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";

export function RegisterView(props){
    const aborController = new AbortController();

    const [searchParams, setSearchParams] = useSearchParams();
    const useUser = Hooks.useUser();

    const [job_titles, setJob_titles] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]); 

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useUser.setIsDisabled(true);
        
        try {
            const payload = {
                firstname: useUser.firstname,
                lastname: useUser.lastname,
                email: useUser.email,
                phone_number: useUser.phone_number,
                password: useUser.password,
                job_title_id: useUser.job_title_id,
                password_confirmation: useUser.password_confirmation
            };

            const response = await Services.AuthService.register(
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

    const init = useCallback( async () => {
        useUser.setIsDisabled(true);

        try {
            const { job_titles } = await Services.JobTitleService.getAll(
                aborController.signal);
            setJob_titles(job_titles);
        } catch (error) {
            
        }finally{useUser.setIsDisabled(false)};
    }, [])

    useEffect(() => {
        init()
    }, [init])
    return (
        <Layout.AuthLayout>
            <div className="signin-right">
                <div className="signin-box signup">
                    <h3 className="signin-title-primary">Inscription !</h3>
                    <h5 className="signin-title-secondary lh-4">
                        inscrivez vous gratuitement en quelque secondes !
                    </h5>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.RegisterForm useUser={useUser} handleSubmit={handleRegisterSubmit}
                    isDisabled={useUser.isDisabled} job_titles={job_titles}/>
                </div>

                </div>
                <div className="signin-left d-md-block d-sm-none">
                    <Components.AuthLeftSide />
                </div>
        </Layout.AuthLayout>
    )
}