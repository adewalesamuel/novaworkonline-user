import { Utils } from "../utils";

export function ResumeCourses(props) {
    const { Date } = Utils;

    const setCourses = (index, name, value) => {
        const courseCopy = [...props.useResume.courses];
        courseCopy[index][name] = value;

        props.useResume.setCourses(courseCopy);
    }
    return (
        <>
            {props.useResume.courses.map((course, index) => {
               return (
                    <div className='row' key={index}>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='course'>Cours</label>
                                <input className='form-control' type='text' id='course' name='course' 
                                value={course.course ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setCourses(index, 'course', e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <label className="col-12">Période</label>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='date_month' name='date_month' 
                                        value={course.date_month ?? ''} disabled={props.isDisabled}  
                                        onChange={ e => setCourses(index, 'date_month', e.target.value) ?? null} required>
                                            <option hidden>Mois</option>
                                            {Date.getMonthList().map((month, index) => {
                                                return (<option key={index} value={month}>{month}</option>)
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='date_year' name='date_year' 
                                        value={course.date_year ?? ''} disabled={props.isDisabled}  
                                        onChange={ e => setCourses(index, 'date_year', e.target.value) ?? null} required>
                                            <option hidden>Année</option>
                                            {Date.getYearList().map((year,index) => {
                                                return (<option key={index} value={year}>{year}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='description'>Description</label>
                                <textarea className='form-control' type='text' id='description' name='description' 
                                value={course.description ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setCourses(index, 'description', e.target.value) ?? null} 
                                required rows={4}></textarea>
                            </div>
                        </div>
                    </div>

               ) 
            })}
            <div className="row">
                <div className='col-12 text-right mt-2'>
                    <button disabled={props.isDisabled ?? false} type='button' 
                    className='btn btn-outline-secondary btn-oblong' onClick={props.handleAddClick}>
                        <span>{props.isDisabled ? "Chargement..." : "Ajouter"}</span>
                    </button>
                    <button disabled={props.isDisabled ?? false} type='button' 
                    className='btn btn-info btn-oblong px-4 ml-2' onClick={props.handleFormSubmit}>
                        <span>{props.isDisabled ? "Chargement..." : "Suivant"}</span>
                    </button>
                </div>
            </div>
        </>
    )
}