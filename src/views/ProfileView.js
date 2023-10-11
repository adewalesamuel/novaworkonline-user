import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks"
import { Services } from "../services";

export function ProfileView(props) {
    const abortController = new AbortController();

    const useUser = Hooks.useUser();

    const [job_titles, setJob_titles] = useState([]);
    const [countries, setCountries] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]); 

    const handleProfileSubmit = async e => {
        e.preventDefault();
        useUser.setIsDisabled(true)

        try {
            await useUser.updateUser(abortController.signal);
        } catch (error) {
            console.log(error);
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        }finally {useUser.setIsDisabled(false)}
    }

    const init = useCallback(async () => {
        try {
            const {JobTitleService, CountryService} = Services;

            await useUser.getUser(abortController.signal);

            const [job_titlesRes, countriesRes] = await Promise.allSettled([
                JobTitleService.getAll(abortController.signal),
                CountryService.getAll(abortController.signal)
            ]);

            setJob_titles(job_titlesRes.value.job_titles);
            setCountries(countriesRes.value.countries);
        } catch (error) {
            console.log(error);
        } finally {useUser.setIsDisabled(false)};
    }, [])

    useEffect(() => {
      init()
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Modifer mon profil</h6>
            </div>
            <Components.Container>
                <Components.ErrorMessages>
                    {errorMessages}
                </Components.ErrorMessages>
                <Components.UserForm useUser={useUser} isDisabled={useUser.isDisabled}
                handleFormSubmit={handleProfileSubmit} job_titles={job_titles} countries={countries}/>
            </Components.Container>
        </>
    )
}