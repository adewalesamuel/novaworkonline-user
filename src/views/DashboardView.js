import { Link } from "react-router-dom";
import { Utils } from "../utils";
import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";

export function DashboardView(props) {
    let abortController = new AbortController();

    const user = Utils.Auth.getUser() ?? {};

    const [isLoading, setIsLoading] = useState(true);
    const [test_score, setTest_score] = useState(0);

    const init = useCallback(async () => {
        try {
            const {test_score} = await Services.UserService.getAnaltics(
                abortController.signal);
            setTest_score(test_score);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
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
                <h6 className="slim-pagetitle">Tableau de bord</h6>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <h3 className="tx-inverse mg-b-15">Bienvenu, {user.firstname} {user.lastname}!</h3>
                    <p className="mg-b-40">
                        Phasellus viverra nulla ut metus varius laoreet. 
                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur 
                        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                    </p>

                    <h6 className="slim-card-title mg-b-15">Quelques chiffres</h6>
                    <div className="row no-gutters">
                        <div className="col-sm-6">
                            <div className="card card-earning-summary">
                                <h6>Score à l'évaluation</h6>
                                <h1>{test_score}%</h1>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-earning-summary mg-sm-l--1 bd-t-0 bd-sm-t">
                                <h6>Progression de la formation actuel</h6>        
                                <div className="progress mg-b-10 mt-1">
                                    {/* <div className="progress-bar wd-50p" role="progressbar" aria-valuenow="50" 
                                    aria-valuemin="0" aria-valuemax="100">50%</div> */}
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" 
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mg-t-20 mg-sm-t-30 mg-lg-t-0">
                    <div className="card card-dash-headline">
                        <h4>Trouvez un emploi bien rémunéré au Canada </h4>
                        <p>
                            Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, 
                            mollis sed, nonummy id, metus...
                        </p>
                        <div className="row row-sm">
                            <div className="col-sm-6">
                                <Link to="./page-paiement.html" className="btn btn-primary btn-block">
                                    Evaluation
                                </Link>
                            </div>
                            <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                                <Link to="/formations" className="btn btn-success btn-block">Voir les formations</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-sm mg-t-20">
                <div className="col-lg-8 col-12">
                    <div className="card card-table mb-4">
                        <div className="card-header">
                            <h6 className="slim-card-title">Formations suivies</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table mg-b-0 tx-13">
                                <thead>
                                    <tr className="tx-10">
                                    <th className="wd-10p pd-y-5 tx-center"></th>
                                    <th className="pd-y-5">Titre</th>
                                    <th className="pd-y-5 tx-right">Prix</th>
                                    <th className="pd-y-5 tx-center">Type</th>
                                    <th className="pd-y-5"></th>
                                    <th className="pd-y-5 tx-right">Date</th>
                                    <th className="pd-y-5 tx-right">Durée</th>
                                    <th className="pd-y-5 tx-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <iframe width="100%" height="403" src="https://www.youtube.com/embed/na80LQCX1KU" 
                    title="Amazing Animated Logo Intro Video -  Black And White Animation Intro Template" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="card card-info">
                    <div className="card-body pd-40">
                        <Link to="/mon-cv" className="btn btn-primary btn-block">Voir mon CV</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}