import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import logo from '../assets/img/logo.png';
import { useState } from "react";
import { Services } from "../services";
import { useSearchParams } from "react-router-dom";

export function PasswordNewView(props){
    const aborController = new AbortController();

    const [searchParms,] = useSearchParams();

    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [messages, setMessages] = useState([]); 

    const handlePasswordNewSubmit = async (e) => {
        e.preventDefault();
        setMessages([]);

        // if (password !== password_confirmation)
        //     setMessages(['Les mots de passe ne correspondent pas!']);

        setIsDisabled(true);
        
        try {
            const payload = {
                password, 
                password_confirmation,
                token: searchParms.get('token'),
                email: searchParms.get('email')
            };

            const { status } = await Services.AuthService.resetPassword(
                JSON.stringify(payload), aborController.signal)

            setMessages([status]);
            setPassword('')
            setPassword_confirmation('');
        } catch (error) {
            console.log(error);
            // Utils.Error.handleError(error);
            
            if ('messages' in error)
                error.messages.then(messages => setMessages(messages));
        } finally {
            setIsDisabled(false)
        }

    }


    return (
        <Layout.AuthLayout>
            <div className="signin-right">
                <div className="signin-box">
                    <h2 className="signin-title-primary">Nouveau mot de passe !</h2>
                    <h3 className="signin-title-secondary">
                        Entrez votre nouveau mot de passe
                    </h3>
                    <Components.ErrorMessages>
                        {messages}
                    </Components.ErrorMessages>
                    <Components.PasswordNewForm handleSubmit={handlePasswordNewSubmit}
                    isDisabled={isDisabled} password_confirmation={password_confirmation} 
                    setPassword={setPassword} password={password} 
                    setPassword_confirmation={setPassword_confirmation}/>
                </div>

                </div>
                <div className="signin-left d-md-block d-sm-none">
                    <div className="signin-box">
                        <h2 className="slim-logo">
                            <a href="page-inscription.html">
                                <img src={logo} height="60px" alt='logo'/>
                            </a>
                        </h2>

                        <p>
                            Nova Work Online vous donne l’opportunité de travailler légalement 
                            et en toute sécurité dans des entreprises canadiennes par le système 
                            de télétravail sans quitter votre pays. Tout ce dont vous avez besoin, 
                            c’est de passer le test psychométrique et suivre nos formations aux
                            normes Québécoises.
                        </p>

                        <p>Inscrivez-vous pour accéder à votre espace</p>

                        <p className="tx-12">&copy; Copyright 2023. All Rights Reserved.</p>
                    </div>
                </div>
        </Layout.AuthLayout>
    )
}