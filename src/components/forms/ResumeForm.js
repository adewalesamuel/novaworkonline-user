import { useState } from 'react';
import { Components } from '..'

export function ResumeForm(props) {
    const abortController = new AbortController();

    const [sectionName, setSectionName] = useState("personal_infos");

    const handleAddClick = name => {
        switch (name) {
            case 'education':
                props.useResume.setEducation([...props.useResume.education, {}]);
                break;
            case 'work_experience':
                props.useResume.setWork_experience(
                    [...props.useResume.work_experience, {}]);
                break;
            case 'skills':
                props.useResume.setSkills([...props.useResume.skills, {}]);
                break;
            case 'interests':
                props.useResume.setInterests([...props.useResume.interests, '']);
                break;
            case 'courses':
                props.useResume.setCourses([...props.useResume.courses, {}]);
                break;
            case 'extra_activities':
                props.useResume.setExtra_activities(
                    [...props.useResume.extra_activities, {}]);
                break;
            case 'languages':
                props.useResume.setLanguages([...props.useResume.languages, {}]);
                break;
            default:
                break;
        }
    }

    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div id="accordion3" className="accordion-two" role="tablist" 
            aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="personal_infos" 
                    onClick={e => setSectionName('personal_infos')}>
                        <a data-toggle="collapse" data-parent="#accordion3" href="#personal_infos" 
                        aria-expanded="true" aria-controls="collapseOne3" 
                        className="tx-gray-800 transition">
                            Informations personnelles
                        </a>
                    </div>

                    <div id="collapseOne3" className={`collapse ${sectionName === 'personal_infos' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingOne3">
                        <div className="card-body">
                            <Components.ResumePersonelInfo useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('profil')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="profil" 
                    onClick={e => setSectionName('profil')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#profil" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Profil
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'profil' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeProfile useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('education')} />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="education" 
                    onClick={e => setSectionName('education')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#education" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Formation
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'education' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeEducation useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('work_experience')} handleAddClick={() => 
                            handleAddClick('education')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="work_experience" 
                    onClick={e => setSectionName('work_experience')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#work_experience" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Experience profesionnelle
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'work_experience' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeWorkExperience useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('skills')} handleAddClick={() => 
                            handleAddClick('work_experience')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="skills" 
                    onClick={e => setSectionName('skills')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#skills" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Compétences
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'skills' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeSkills useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('languages')} handleAddClick={() => 
                            handleAddClick('skills')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="languages" 
                    onClick={e => setSectionName('languages')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#languages" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Langues
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'languages' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeLanguages useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('interests')} handleAddClick={() => 
                            handleAddClick('languages')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="interests" 
                    onClick={e => setSectionName('interests')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#interests" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Centres d'intérêts
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'interests' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeInterests useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('courses')} handleAddClick={() => 
                            handleAddClick('interests')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="courses" 
                    onClick={e => setSectionName('courses')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#courses" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Cours
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'courses' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeCourses useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('extra_activities')} handleAddClick={() => 
                            handleAddClick('courses')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="extra_activities" 
                    onClick={e => setSectionName('extra_activities')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#extra_activities" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Activités extra profesionnelles
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'extra_activities' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeExtraActivities useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('signature')} handleAddClick={() => 
                            handleAddClick('extra_activities')}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="signature" 
                    onClick={e => setSectionName('signature')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#signature" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Signature
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'signature' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeSignature useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('footer')} />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="footer" 
                    onClick={e => setSectionName('footer')}>
                        <a className="collapsed tx-gray-800 transition" data-toggle="collapse"
                        data-parent="#accordion3" href="#footer" aria-expanded="false" 
                        aria-controls="collapseTwo3">
                            Bas de page
                        </a>
                    </div>
                    <div id="collapseTwo3" className={`collapse ${sectionName === 'footer' 
                    ? 'show' : ''}`} role="tabpanel" aria-labelledby="headingTwo3">
                        <div className="card-body">
                            <Components.ResumeFooter useResume={props.useResume}
                            handleFormSubmit={() => setSectionName('')} />
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='row mt-3'>
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' 
                    className='btn btn-primary rounded px-5' onClick={props.handleFormSubmit}>
                        <span>{props.isDisabled ? "Chargement..." : "Enregistrer"}</span>
                    </button>
                </div>
            </div>
        </form>
    )
}