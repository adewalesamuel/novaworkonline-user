import { Components } from ".";
import { Services } from "../services";

export function ResumeSignature(props) {
    const abortController = new AbortController(); 

    const handleFileUpload = async file => {
        props.useResume.setIsDisabled(true);
        
        try {
            const formData = new FormData();

            formData.append('img', file);
            
            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

                props.useResume.setSignature(
                    {...props.useResume.signature, signature_url: img_url})
        } catch (error) {
            
        }finally {props.useResume.setIsDisabled(false)}
    }
    return (
        <div className='row'>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='city'>Ville</label>
                    <input className='form-control' type='text' id='city' name='city' 
                    value={props.useResume.signature.city ?? ''} disabled={props.isDisabled} 
                     onChange={ e => props.useResume.setSignature(
                        {...props.useResume.signature, city: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input className='form-control' type='date' id='date' name='date' 
                    value={props.useResume.signature.date ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setSignature(
                        {...props.useResume.signature, date: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='signature_url'>Signature</label>
                    <Components.ImageFileInput handleFileChange={handleFileUpload} 
                        img_url={props.useResume.signature?.signature_url ?? ''}/>
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