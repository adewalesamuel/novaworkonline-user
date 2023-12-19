import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";


export function JobTitleListView(props) {
    let abortController = new AbortController();

    const [job_title, setJob_title] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {job_title} = await Services.JobTitleService
            .getUserJobTitle(abortController.signal);

            setJob_title(job_title);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
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
                <h6 className="slim-pagetitle">Domaine d'activté: {job_title.name}</h6>
            </div>
            <div className="">
                <div className="card card-pricing-one">
                    <p> {job_title.description ?? "Aucune description"}</p>
                </div>
            </div>
        </>
    )
}