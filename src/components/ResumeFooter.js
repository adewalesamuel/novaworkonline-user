export function ResumeFooter(props) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='content'>Contenu</label>
                    <textarea className='form-control' type='text' id='content' name='content' 
                    value={props.useResume.footer ?? ''} disabled={props.isDisabled}  
                    onChange={ e => props.useResume.setFooter(e.target.value) ?? null} 
                    required rows={4}></textarea>
                </div>
            </div>
        </div>
    )
}