import { Utils } from "../utils";

export function ResumeWorkExperience(props) {
    const { Date } = Utils;

    const setWorkExperience = (index, name, value) => {
        const work_experienceCopy = [...props.useResume.work_experience];
        work_experienceCopy[index][name] = value;

        props.useResume.setWork_experience(work_experienceCopy);
    }
    
    return (
        <>
            {props.useResume.work_experience.map((work_experience, index) => {
               return (
                    <div className='row' key={index}>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='position'>Poste</label>
                                <input className='form-control' type='text' id='position' name='position' 
                                value={work_experience.position ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setWorkExperience(index, 'position', 
                                e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='company'>Employeur</label>
                                <input className='form-control' type='text' id='company' name='company' 
                                value={work_experience.company ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setWorkExperience(index, 'company', 
                                e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='city'>Ville</label>
                                <input className='form-control' type='text' id='city' name='city' 
                                value={work_experience.city ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setWorkExperience(index, 'city', e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <label className="col-12">Date de debut</label>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='start_date_month' 
                                        name='start_date_month' value={work_experience.start_date_month ?? ''} 
                                        disabled={props.isDisabled}  onChange={ e => setWorkExperience(index, 'start_date_month', 
                                        e.target.value) ?? null} required>
                                            <option hidden>Mois</option>
                                            {Date.getMonthList().map((month, index) => {
                                                return (<option key={index} value={month}>{month}</option>)
                                            })} 
                                        </select>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='start_date_year' name='start_date_year' 
                                        value={work_experience.start_date_year ?? ''} disabled={props.isDisabled}  
                                        onChange={ e => setWorkExperience(index, 'start_date_year', 
                                        e.target.value) ?? null} required>
                                            <option hidden>Année</option>
                                            {Date.getYearList().map((year,index) => {
                                                return (<option key={index} value={year}>{year}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <label className="col-12">Date de fin</label>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='end_date_month' name='end_date_month' 
                                        value={work_experience.end_date_month ?? ''} disabled={props.isDisabled}  
                                        onChange={ e => setWorkExperience(index, 'end_date_month', 
                                        e.target.value) ?? null} required>
                                            <option hidden>Mois</option>
                                            {Date.getMonthList().map((month, index) => {
                                                return (<option key={index} value={month}>{month}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <select className='form-control' type='text' id='end_date_year' name='end_date_year' 
                                        value={work_experience.end_date_year ?? ''} disabled={props.isDisabled}  
                                        onChange={ e => setWorkExperience(index, 'end_date_year', 
                                        e.target.value) ?? null} required>
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
                                value={work_experience.description ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setWorkExperience(index, 'description', 
                                e.target.value) ?? null} 
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