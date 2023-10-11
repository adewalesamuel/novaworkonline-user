export function ResumeProfile(props) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea className='form-control' type='text' id='description' name='description' 
                    value={props.useResume.profil ?? ''} disabled={props.isDisabled}  
                    onChange={ e => props.useResume.setProfil(e.target.value) ?? null} 
                    required rows={4}></textarea>
                </div>
            </div>
            
            <div className='col-12 text-right mt-2'>
                <button disabled={props.isDisabled ?? false} type='button' 
                className='btn btn-info btn-oblong px-4' onClick={props.handleFormSubmit}>
                    <span>{props.isDisabled ? "Chargement..." : "Suivant"}</span>
                </button>
            </div>
        </div>
    )
}