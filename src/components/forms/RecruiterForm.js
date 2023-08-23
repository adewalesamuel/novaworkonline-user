import { Components } from '..'

export function RecruiterForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input className='form-control' type='text' id='firstname' name='firstname' 
                        placeholder='Firstname' value={props.useRecruiter.firstname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setFirstname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input className='form-control' type='text' id='lastname' name='lastname' 
                        placeholder='Lastname' value={props.useRecruiter.lastname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setLastname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useRecruiter.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useRecruiter.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='birth_date'>Birth_date</label>
                        <input className='form-control' type='date' id='birth_date' name='birth_date' 
                        placeholder='Birth_date' value={props.useRecruiter.birth_date ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setBirth_date(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <input className='form-control' type='text' id='gender' name='gender' 
                        placeholder='Gender' value={props.useRecruiter.gender ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setGender(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='phone_number'>Phone_number</label>
                        <input className='form-control' type='text' id='phone_number' name='phone_number' 
                        placeholder='Phone_number' value={props.useRecruiter.phone_number ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setPhone_number(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='location'>Location</label>
                        <input className='form-control' type='text' id='location' name='location' 
                        placeholder='Location' value={props.useRecruiter.location ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setLocation(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='profil_img_url'>Profil_img_url</label>
                        <input className='form-control' type='text' id='profil_img_url' name='profil_img_url' 
                        placeholder='Profil_img_url' value={props.useRecruiter.profil_img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setProfil_img_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='company_name'>Company_name</label>
                        <input className='form-control' type='text' id='company_name' name='company_name' 
                        placeholder='Company_name' value={props.useRecruiter.company_name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setCompany_name(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='company_info'>Company_info</label>
                        <input className='form-control' type='text' id='company_info' name='company_info' 
                        placeholder='Company_info' value={props.useRecruiter.company_info ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setCompany_info(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='api_token'>Api_token</label>
                        <input className='form-control' type='text' id='api_token' name='api_token' 
                        placeholder='Api_token' value={props.useRecruiter.api_token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setApi_token(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='is_active'>Is_active</label>
                        <input className='form-control' type='radio' id='is_active' name='is_active' 
                        placeholder='Is_active' value={props.useRecruiter.is_active ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setIs_active(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country_id'>Country_id</label>
                        <select className='select2 form-control' id='country_id' name='country_id' value={props.useRecruiter.country_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useRecruiter.setCountry_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}