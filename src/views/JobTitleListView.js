import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import coursePlaceholder from '../assets/img/course-placeholder.png';

export function JobTitleListView(props) {
    let abortController = new AbortController();

    const [job_title, setJob_title] = useState({});
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {job_title} = await Services.JobTitleService
            .getUserJobTitle(abortController.signal);

            setJob_title(job_title);

            if (job_title.courses) setCourses(JSON.parse(job_title.courses));
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
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2 className="mb-3">Description</h2>
                            <p className="text-lg"> {job_title.description ?? "Aucune description"}</p>
                        </div>
                        <div className="col-12 mt-4">
                            <h2 className="mb-3">Formations disponibles</h2>
                            <div className="row">
                                {courses.map((course, index) => {
                                    const courseUrl =( course.url !== "" && course.url) 
                                    ? course.url : coursePlaceholder
                                    return (
                                        <div className="col-6 col-md-3 mb-5" key={index}>
                                            <div className="w-100">
                                                <img src={courseUrl} 
                                                className="img-fluid" alt=""/>
                                            </div>
                                            <div className="p-2">
                                                <h4>{course.name ?? ""}</h4>
                                            </div>
                                            <a href={course.url} className="btn btn-primary py-2 px-4 
                                            btn-block rounded">
                                                Consulter la formation
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}