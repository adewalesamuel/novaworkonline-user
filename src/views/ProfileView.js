import { useCallback, useEffect, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks"
import { Services } from "../services";
import { Utils } from "../utils";

export function ProfileView(props) {
    let abortController = new AbortController();

    const useUser = Hooks.useUser();

    const [job_titles, setJob_titles] = useState([]);
    const [countries, setCountries] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]); 

    const handleProfileSubmit = async e => {
        e.preventDefault();
        useUser.setIsDisabled(true);

        try {
            const { user } = await useUser.updateUser(abortController.signal);

            Utils.Auth.setUser(user);
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
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
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