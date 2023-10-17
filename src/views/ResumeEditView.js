import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { useNavigate } from "react-router-dom";


export function ResumeEditView(props) {
    let abortController = new AbortController();

    const navigate = useNavigate();
    const useResume = Hooks.useResume();

    const [errorMessages, setErrorMessages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    const handleResumeSubmit = async e => {
        useResume.setIsDisabled(true);
        e.preventDefault()

        try {
           await useResume.updateResume(abortController.signal);
           navigate('/mon-cv');
        } catch (error) {
            console.log(error);
        }finally {useResume.setIsDisabled(false)}
    }

    const init = useCallback(async () => {
        useResume.setIsDisabled(true);

        try {
            await useResume.getResume(abortController.signal);
        } catch (error) {

            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        } finally {
            useResume.setIsDisabled(false)
            setIsLoading(false);
        };
    }, [])

    useEffect(() => {
        init()
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Modifer mon cv</h6>
            </div>
            <Components.Container>
                <Components.ErrorMessages>{errorMessages}</Components.ErrorMessages>
                <Components.ResumeForm useResume={useResume} isDisabled={useResume.isDisabled}
                handleFormSubmit={handleResumeSubmit}/>
            </Components.Container>
        </>
    )
}