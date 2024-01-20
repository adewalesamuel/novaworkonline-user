import { Link } from "react-router-dom";
import { Components } from "..";

export function RegisterForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row row-xs mg-b-10 mb-3">
                <div className="col-sm">
                    <input disabled={props.isDisabled} type="text" className="form-control rounded-pill" 
                    value={props.useUser.lastname} onChange={e => 
                    props.useUser.setLastname(e.target.value)} placeholder="Nom"/>
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <input disabled={props.isDisabled} type="text" className="form-control rounded-pill" 
                    value={props.useUser.firstname}  onChange={e => 
                    props.useUser.setFirstname(e.target.value)} placeholder="Prenom" />
                </div>
            </div>
            <div className="row row-xs mg-b-10">
                <div className='col-12'>
                    <div className='form-group'>
                        <select className='form-control rounded-pill' type='text' id='job_title' name='job_title' 
                        disabled={props.isDisabled} value={props.useUser.job_title_id} onChange={ e => 
                        props.useUser.setJobtitle_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez votre domaine</option>
                            {props.job_titles.map((job_title, index) => {
                                return (<option key={index} value={job_title.id}>{job_title.name}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="email" className="form-control rounded-pill" 
                    value={props.useUser.email} placeholder="Email" onChange={e => 
                    props.useUser.setEmail(e.target.value)}/>
                </div>
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="tel" className="form-control rounded-pill" 
                    value={props.useUser.phone_number} minLength={10} maxLength={10} onChange={e => 
                    props.useUser.setPhone_number(e.target.value)} placeholder="Numéro de téléphone" />
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <Components.CustomPasswordInput setPassword={props.useUser.setPassword_confirmation}
                    isDisabled={props.isDisabled} placeholder="Mot de passe" 
                    password={props.useUser.password_confirmation}/>
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <Components.CustomPasswordInput setPassword={props.useUser.setPassword}
                    isDisabled={props.isDisabled} placeholder="Confirmer le mot de passe" 
                    password={props.useUser.password}/>
                </div>
            </div>

            <button className="btn btn-primary btn-block btn-signin rounded-pill" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "S'inscrire"}
            </button>
            <p>
                En vous connectant vous accepter nos <br />
                <a href="https://novaworkonline.com">Conditions d'utilistation</a> & 
                <a href="https://novaworkonline.com"> Politique de confidentialité</a>
            </p>

            <p className="mg-t-0 mg-b-0">Vous avez déjà un compte ? 
                <Link to="/connexion"> Connectez-vous</Link>
            </p>
        </form>
    )
}