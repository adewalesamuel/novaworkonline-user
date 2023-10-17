import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { useNavigate } from "react-router-dom";
import { Utils } from "../utils";


export function ResumeCreateView(props) {
    let abortController = new AbortController();

    const user = Utils.Auth.getUser();

    const navigate = useNavigate();
    const useResume = Hooks.useResume();

    const [errorMessages, setErrorMessages] = useState([]); 
    
    const handleResumeSubmit = async e => {
        useResume.setIsDisabled(true);
        e.preventDefault()

        try {
           await useResume.createResume(abortController.signal);
           navigate('/mon-cv');

        } catch (error) {
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        }finally {useResume.setIsDisabled(false)}
    }

    const init = useCallback(() => {
        const personal_infos = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone_number: user.phone_number
        }

        useResume.setPersonal_infos(personal_infos);
    }, [])

    useEffect(() => {
        init()
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Creer mon cv</h6>
            </div>
            <Components.Container>
                <Components.ErrorMessages>{errorMessages}</Components.ErrorMessages>
                <Components.ResumeForm useResume={useResume} handleFormSubmit={handleResumeSubmit}
                isDisabled={useResume.isDisabled}/>
            </Components.Container>
        </>
    )
}