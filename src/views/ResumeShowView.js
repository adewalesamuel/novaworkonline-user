import { Link } from "react-router-dom";
import { Hooks } from "../hooks";
import { useCallback, useEffect, useState } from "react";
import { Utils } from "../utils";


export function ResumeShowView(props) {
    let abortController = new AbortController();

    const useResume = Hooks.useResume();
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        useResume.setIsDisabled(true);

        try {
            await useResume.getResume(abortController.signal);
        } catch (error) {
            console.log(error);
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
                <h6 className="slim-pagetitle">Voir mon cv</h6>
            </div>
            {!useResume.id && !isLoading ? 
                <div className="col-lg-12 mg-t-20 mg-sm-t-30 mg-lg-t-0">
                    <div className="card card-dash-headline">
                        <h4>Vous n'avez pas encore de CV</h4>
                        <p>
                            Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, 
                            mollis sed, nonummy id, metus...
                        </p>

                        <div className="col-lg-12">
                            <Link to="/mon-cv/creer" className="btn btn-primary d-inline-block px-5 rounded">
                                Créer mon cv
                            </Link>
                        </div>
                    </div>
                </div>
            : null}
            {!isLoading && useResume.id ? 
                <div className="row">
                    <div className="col-sm-7 col-12">
                        <div className="card card-experience mg-t-20">
                            <div className="card-body">
                                <div className="slim-card-title">
                                    {useResume.personal_infos?.firstname} {useResume.personal_infos?.lastname}
                                </div>
                                <div className="media">
                                    <div className="experience-logo">
                                        <i className="icon ion-briefcase"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="position-name">{useResume.work_experience[0]?.position}</h6>
                                        <p className="position-company">{useResume.work_experience[0]?.company}</p>
                                        <p className="position-year">
                                            De {useResume.work_experience[0]?.start_date_month} {useResume
                                            .work_experience[0]?.start_date_year}&nbsp;
                                            a {useResume.work_experience[0]?.end_date_month} {useResume
                                            .work_experience[0]?.end_date_year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to={`${process.env.REACT_APP_HOST}/mon-cv/apercu/${Utils.Auth.getSessionToken()}`} 
                                target="_blacnk">Apercu du cv</Link>
                                <Link to="/mon-cv/modifier">Modifier</Link>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
        </>
    )
}