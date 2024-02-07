import { Components } from "..";
import { Services } from "../../services";

export function UserForm(props) {
    let abortController = new AbortController(); 

    const handleFileUpload = async (e, file) => {
        props.useUser.setIsDisabled(true);
        
        try {
            const formData = new FormData();

            formData.append('img', file);
            
            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

            const targetName = e.target.name;

            const payload = {
                firstname: props.useUser.firstname,
                lastname: props.useUser.lastname,
                email: props.useUser.email,
                password: props.useUser.password,
                password_confirmation: props.useUser.password_confirmation,
                birth_date: props.useUser.birth_date,
                gender: props.useUser.gender,
                phone_number: props.useUser.phone_number,
                city: props.useUser.city,
                profil_img_url: props.useUser.profil_img_url,
                country_id: props.useUser.country_id,
                job_title_id: props.useUser.job_title_id,
                video_url: props.useUser.video_url,
            }
            if (targetName === "") {
                payload.profil_img_url = img_url;
                props.useUser.setProfil_img_url(img_url);
            }

            if (targetName === "videoFile"){
                payload.video_url = img_url;
                props.useUser.setVideo_url(img_url);
            }

            Services.UserService.update(JSON.stringify(payload), 
            abortController.signal);
        } catch (error) {
            console.log(error);
        }finally {props.useUser.setIsDisabled(false)}
    }

    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group rounded-pill d-flex mx-auto 
                            justify-content-center align-items-center position-relative' style={{
                                    border: "3px solid #2f1b66",
                                    overflow: 'hidden',
                                    width: "15rem",
                                    height: "15rem"
                                }}>
                                <Components.ImageFileInput 
                                img_url={props.useUser.profil_img_url} 
                                handleFileChange={handleFileUpload} />

                            </div>
                            <div className='d-flex align-items-center col-12 mt-2 flex-column'>
                                <strong className='text-white bg-blue px-4 py-2 rounded-pill'>
                                    {props.useUser.lastname} {props.useUser.firstname}
                                </strong>
                                <span className='btn btn-link text-primary'>
                                    <i className='fa fa-pencil mr-2'></i>
                                    Modifier
                                </span>
                            </div>
                            <div className='col-12 mt-10'>
                                <div className='form-group'>
                                    <label htmlFor='profil_img_url d-block'>Video de présentation</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" role='button' 
                                        name="videoFile" id="videoFile" accept="video/*" disabled={props.isDisabled}
                                        onChange={e => handleFileUpload(e, e.target.files[0])}/>
                                        <label className="custom-file-label custom-file-label-primary" htmlFor="videoFile">
                                            {props.isDisabled ? "Chargement..." : "Choisir un fichier"}
                                        </label>
                                    </div>
                                    {props.useUser.video_url ? 
                                        <video src={props.useUser.video_url} className="bg-grey w-100 d-block my-3" 
                                        controls/>
                                    : null} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-8'>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='lastname'>Nom de famille</label>
                                <input className='form-control rounded bg-light' type='text' id='lastname' name='lastname' 
                                placeholder='Nom de famille' value={props.useUser.lastname ?? ''}
                                disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setLastname(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='firstname'>Prénom</label>
                                <input className='form-control rounded bg-light' type='text' id='firstname' name='firstname' 
                                placeholder='Prénom' value={props.useUser.firstname ?? ''}
                                disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setFirstname(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='email'>E-mail</label>
                                <input className='form-control rounded bg-light' type='text' id='email' name='email' 
                                placeholder='E-mail' value={props.useUser.email ?? ''}
                                disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setEmail(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='phone_number'>Numéro de téléphone</label>
                                <input className='form-control rounded bg-light' type='text' id='phone_number' name='phone_number' 
                                placeholder='Numéro de téléphone' value={props.useUser.phone_number ?? ''}
                                disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setPhone_number(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='birth_date'>Date de naissance</label>
                                <input className='form-control rounded bg-light' type='date' id='birth_date' name='birth_date' 
                                placeholder='Date de naissance' value={props.useUser.birth_date ?? ''}
                                disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setBirth_date(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='gender'>Genre</label>
                                <select className='form-control rounded bg-light' type='text' id='gender' name='gender' 
                                disabled={props.isDisabled} value={props.useUser.gender} onChange={ e => 
                                props.useUser.setGender(e.target.value) ?? null} required>
                                    <option value={"M"}>Homme</option>
                                    <option value={"F"}>Femme</option>
                                    <option value={"O"}>Autre</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='city'>Ville</label>
                                <input className='form-control rounded bg-light' type='text' id='city' name='city' 
                                placeholder='Ville' value={props.useUser.city ?? ''}disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setCity(e.target.value) ?? null} required/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='country_id'>Pays</label>
                                <select className='select2 form-control rounded bg-light' id='country_id' name='country_id' 
                                value={props.useUser.country_id ?? ''} disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setCountry_id(e.target.value) ?? null} required>
                                    {
                                        props.countries.map(country => {
                                            return (<option key={Math.random()} value={country.id ?? ''}>
                                                {country.name}</option>)
                                        })
                                    } 
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='job_title_id'>Domaine</label>
                                <select className='select2 form-control rounded bg-light' id='job_title_id' name='job_title_id'
                                value={props.useUser.job_title_id ?? ''} disabled={props.isDisabled} 
                                onChange={ e => props.useUser.setJobtitle_id(e.target.value) ?? null} required>
                                    {
                                        props.job_titles.map(job_title => {
                                            return (<option key={Math.random()} value={job_title.id ?? ''}>
                                                {job_title.name}</option>)
                                        })
                                    } 
                                </select>
                            </div>
                        </div>
                        
                        <div className='col-12 text-center mt-3'>
                            <button disabled={props.isDisabled ?? false} type='button' 
                            className='btn btn-primary px-5 rounded-pill' onClick={props.handleFormSubmit}>
                                <span>{props.isDisabled ? "Chargement..." : "Enregistrer"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}