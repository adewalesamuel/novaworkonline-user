export function ResumeInterests(props) {
    const setInterests = (index, value) => {
        const interestsCopy = [...props.useResume.interests];
        interestsCopy[index] = value;

        props.useResume.setInterests(interestsCopy);
    }
    return (
        <>
            {props.useResume.interests.map((interest, index) => {
                return (
                    <div className='row' key={index}>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='interest'>Intérêt</label>
                                <input className='form-control' type='text' id='interest' name='interest' 
                                value={interest ?? ''} disabled={props.isDisabled}  
                                onChange={ e => setInterests(index, e.target.value) ?? null} 
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