import { Link } from "react-router-dom";
import { Hooks } from "../hooks";
import { useCallback, useEffect, useState } from "react";
import { Utils } from "../utils";
import { Services } from "../services";
import { Components } from "../components";


export function JobTitleListView(props) {
    let abortController = new AbortController();

    const [job_titles, setJob_titles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const { job_titles } = await Services.JobTitleService.getAll(
                abortController.signal);
            setJob_titles(job_titles);
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
                <h6 className="slim-pagetitle">Formations</h6>
            </div>
            <div className="">
                <div className="card card-pricing-one">
                    <div className="row justify-content-center">
                        {job_titles.map((job_title, index) => {
                            return (
                                <div className="m-2" key={index}>
                                    <Link to={`/abonnements`} 
                                    className="btn btn-oblong btn-primary">
                                        {job_title.name}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}