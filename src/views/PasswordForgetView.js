import { Layout } from "../layouts";
import { Hooks } from '../hooks'
import { Components } from "../components";

import logo from '../assets/img/logo.png';
import { useState } from "react";
import { Services } from "../services";

export function PasswordForgetView(props){
    const aborController = new AbortController();

    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [messages, setMessages] = useState([]); 

    const handlePasswordForgetSubmit = async (e) => {
        e.preventDefault();
        setMessages([]);
        setIsDisabled(true);
        
        try {
            const payload = {email};

            const { status } = await Services.AuthService.forgotPassword(
                JSON.stringify(payload), aborController.signal)

            setMessages([status]);
            setEmail('');
        } catch (error) {
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
                    <h2 className="signin-title-primary">Mot de passe oublié !</h2>
                    <h3 className="signin-title-secondary">
                        Entrez votre addrese mail pour reinitialiser votre mot de passe
                    </h3>
                    <Components.ErrorMessages>
                        {messages}
                    </Components.ErrorMessages>
                    <Components.PasswordForgetForm handleSubmit={handlePasswordForgetSubmit}
                    isDisabled={isDisabled} email={email} setEmail={setEmail}/>
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