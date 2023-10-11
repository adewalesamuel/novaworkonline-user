import { Components } from ".";
import { Services } from "../services";

export function ResumePersonelInfo(props) {
    const abortController = new AbortController(); 

    const handleFileUpload = async file => {
        props.useResume.setIsDisabled(true);
        
        try {
            const formData = new FormData();

            formData.append('img', file);
            
            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

                props.useResume.setPersonal_infos(
                    {...props.useResume.personal_infos, photo_url: img_url})
        } catch (error) {
            
        }finally {props.useResume.setIsDisabled(false)}
    }
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='profil_img_url'>Photo</label>
                    <Components.ImageFileInput handleFileChange={handleFileUpload} 
                        img_url={props.useResume.personal_infos?.photo_url ?? ''}/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='firstname'>Prénom</label>
                    <input className='form-control' type='text' id='firstname' name='firstname' 
                    value={props.useResume.personal_infos.firstname ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, firstname: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='lastname'>Nom de famille</label>
                    <input className='form-control' type='text' id='lastname' name='lastname' 
                    value={props.useResume.personal_infos.lastname ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, lastname: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='email'>Adresse Email</label>
                    <input className='form-control' type='text' id='email' name='email' 
                    value={props.useResume.personal_infos.email ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, email: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='profile_title'>Titre du profil</label>
                    <input className='form-control' type='text' id='profile_title' name='profile_title' 
                    value={props.useResume.personal_infos.profile_title ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, profile_title: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='phone_number'>Numéro de téléphone</label>
                    <input className='form-control' type='text' id='phone_number' name='phone_number' 
                    value={props.useResume.personal_infos.phone_number ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, phone_number: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='adresse'>Adresse</label>
                    <input className='form-control' type='text' id='adresse' name='adresse' 
                    value={props.useResume.personal_infos.adresse ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, adresse: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='postal_code'>Code postal</label>
                    <input className='form-control' type='text' id='postal_code' name='postal_code' 
                    value={props.useResume.personal_infos.postal_code ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, postal_code: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='city'>Ville</label>
                    <input className='form-control' type='text' id='city' name='city' 
                    value={props.useResume.personal_infos.city ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, city: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='birth_date'>Date de naissance</label>
                    <input className='form-control' type='text' id='birth_date' name='birth_date' 
                    value={props.useResume.personal_infos.birth_date ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, birth_date: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='birth_place'>Lieu de naissance</label>
                    <input className='form-control' type='text' id='birth_place' name='birth_place' 
                    value={props.useResume.personal_infos.birth_place ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, birth_place: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='driver_licence'>Permi de conduire</label>
                    <input className='form-control' type='text' id='driver_licence' name='driver_licence' 
                    value={props.useResume.personal_infos.driver_licence ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, driver_licence: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='sex'>Sexe</label>
                    <input className='form-control' type='text' id='sex' name='sex' 
                    value={props.useResume.personal_infos.sex ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, sex: e.target.value}) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='form-group'>
                    <label htmlFor='nationnality'>Nationnalité</label>
                    <input className='form-control' type='text' id='nationnality' name='nationnality' 
                    value={props.useResume.personal_infos.nationnality ?? ''} disabled={props.isDisabled} 
                    onChange={ e => props.useResume.setPersonal_infos(
                        {...props.useResume.personal_infos, nationnality: e.target.value}) ?? null} required/>
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