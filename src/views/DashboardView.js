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
            <div className="col-lg-7">
                <div className="card card-earning-summary">
                    <div className="row justify-content-between align-items-center">
                        <h4 className="col">Score à l'évaluation</h4>
                        <h4 className="mr-3 p-2 rounded" style={{backgroundColor: "#ff753933"}}>
                            {test_score}%
                        </h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 mg-t-20">
                <div className="card card-dash-headline text-left">
                    <h4 className="">Trouvez un emploi bien rémunéré au Canada</h4>
                    <p>
                        Fusce vulputate eleifend sapien. Vestibulum purus quam, 
                        scelerisque ut, mollis sed, nonummy id, metus...
                    </p>
                    <div className="row row-sm">
                        <div className="col-sm-6">
                            <a href={Utils.Auth.getUser()?.certificat_url ?? ""} rel="noreferrer" 
                            target="_blank" className="btn btn-block rounded"
                            style={{backgroundColor: "#ff753933", color: "#2f1b66"}}>
                                Mon certificat
                            </a>
                        </div>
                        <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                            <Link to="/formations" className="btn btn-success btn-block rounded"
                            style={{backgroundColor: "#2f1b6630", color: "#2f1b66", border: "none"}}>
                                Accéder à ma formation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-7 mt-3">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/na80LQCX1KU" 
                        title="Amazing Animated Logo Intro Video -  Black And White Animation Intro Template" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                        picture-in-picture; web-share" allowFullScreen className="d-block mx-auto" 
                        style={{maxWidth: "200px"}}></iframe>
                    </div>

                    <div className="col-lg-5 col-12 text-center">
                        <Link to="/mon-cv" className="btn btn-block rounded"
                        style={{backgroundColor: '#00d93d30', color:"#2f1b66"}}>
                            Voir mon Curriculum Vitae
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}