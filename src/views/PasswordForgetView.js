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
                        Entrez votre adrese mail pour reinitialiser votre mot de passe
                    </h3>
                    <Components.ErrorMessages>
                        {messages}
                    </Components.ErrorMessages>
                    <Components.PasswordForgetForm handleSubmit={handlePasswordForgetSubmit}
                    isDisabled={isDisabled} email={email} setEmail={setEmail}/>
                </div>

                </div>
                <div className="signin-left d-md-block d-sm-none">
                    <Components.AuthLeftSide />
                </div>
        </Layout.AuthLayout>
    )
}