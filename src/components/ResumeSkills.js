export function ResumeSkills(props) {
    const setSkills = (index, name, value) => {
        const skillsCopy = [...props.useResume.skills];
        skillsCopy[index][name] = value;

        props.useResume.setSkills(skillsCopy);
    }
    return (
        <>
            {props.useResume.skills.map((skill, index) => {
                return (
                    <div className='row' key={index}>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='skill'>Compétence</label>
                                <input className='form-control' type='text' id='skill' name='skill' 
                                value={skill.skill ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setSkills(index, 'skill', e.target.value) ?? null} 
                                required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='level'>Niveau</label>
                                <input className='form-control' type="range" id='level' name='level'
                                value={skill.level ?? 0} disabled={props.isDisabled} max={10} step={1}
                                onChange={ e => setSkills(index, 'level', e.target.value) ?? null} 
                                required />
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