export function ResumeLanguages(props) {
    const setLanguages = (index, name, value) => {
        const languagesCopy = [...props.useResume.languages];
        languagesCopy[index][name] = value;

        props.useResume.setLanguages(languagesCopy);
    }
    return (
        <>
            {props.useResume.languages.map((language, index) => {
                return (
                    <div className='row' key={index}>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='language'>Langue</label>
                                <input className='form-control' type='text' id='language' name='language' 
                                value={language.language ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setLanguages(index, 'language', e.target.value) ?? null} 
                                required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='level'>Niveau</label>
                                <input className='form-control' type="range" id='level' name='level'
                                value={language.level ?? 0} disabled={props.isDisabled} max={10} step={1}
                                onChange={ e => setLanguages(index, 'level', e.target.value) ?? null} 
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