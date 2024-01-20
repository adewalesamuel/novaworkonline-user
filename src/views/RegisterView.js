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
    
    const validateFormFields = (validatorList) => {
        const errorList = [];

        validatorList.forEach(validatorItem => {
            const {pattern, value, message} = validatorItem;

            if (!pattern.test(value)) errorList.push(message);
        })

        return errorList;
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useUser.setIsDisabled(true);
        
        try {

            const errorList =  validateFormFields([
                {
                    value: useUser.firstname,
                    pattern: new RegExp('[A-Za-z]', 'g'),
                    message: 'Le prenom ne doit pas contenir de chiffres'
                },
                {
                    value: useUser.lastname,
                    pattern: new RegExp('[A-Za-z]', 'g'),
                    message: 'Le nom ne doit pas contenir de chiffres'
                },
                {
                    value: useUser.phone_number,
                    pattern: new RegExp('[0-9]', 'gi'),
                    message: 'Le numéro de téléphone doit contenir 10 chiffres'
                },
                {
                    value: useUser.password,
                    pattern: new RegExp('[A-Z]', 'g'),
                    message: 'le mot de passe doit contenir au moins une lettre majuscule'
                },
                {
                    value: useUser.password,
                    pattern: new RegExp('[a-z]', 'g'),
                    message: 'le mot de passe doit contenir au moins une lettre minuscule'
                },
                {
                    value: useUser.password,
                    pattern: new RegExp('[@$!%*#?&]', 'gi'),
                    message: 'le mot de passe doit contenir au moins un caractère spécial'
                }

            ]);

            if (errorList.length > 0) {
                const error = new Error('Une erreur est survenue');
                error.errorList = errorList

                throw error;
            }

            if (useUser.password !== useUser.password_confirmation)
                return setErrorMessages(['Vos mots de passes ne correspondent pas!']);

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
            if ('errorList' in error)
                setErrorMessages(error.errorList)
            
            if ('messages' in error)
                error.messages.then(messages => {
                    setErrorMessages(messages);
                });
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