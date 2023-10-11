import { Link } from "react-router-dom";

export function RegisterForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row row-xs mg-b-10 mb-3">
                <div className="col-sm">
                    <input disabled={props.isDisabled} type="text" className="form-control" 
                    value={props.useUser.lastname}  onChange={e => 
                    props.useUser.setLastname(e.target.value)} placeholder="Nom" />
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <input disabled={props.isDisabled} type="text" className="form-control" 
                    value={props.useUser.firstname}  onChange={e => 
                    props.useUser.setFirstname(e.target.value)} placeholder="Prenom" />
                </div>
            </div>
            <div className="row row-xs mg-b-10">
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="email" className="form-control" 
                    value={props.useUser.email} placeholder="Email" onChange={e => 
                    props.useUser.setEmail(e.target.value)}/>
                </div>
                <div className="col-sm-12 mb-3">
                    <input disabled={props.isDisabled} type="tel" className="form-control" 
                    value={props.useUser.phone_number} onChange={e => 
                    props.useUser.setPhone_number(e.target.value)} placeholder="Numéro de téléphone" />
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.useUser.password} onChange={e => 
                    props.useUser.setPassword(e.target.value)} placeholder="Mot de passe" />
                </div>
                <div className="col-sm mg-t-10 mg-sm-t-0">
                    <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.useUser.password_confirmation} onChange={e => 
                    props.useUser.setPassword_confirmation(e.target.value)} 
                    placeholder="Confirmer le mot de passe" />
                </div>
            </div>

            <button className="btn btn-primary btn-block btn-signin" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "S'inscrire"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous avez déjà un compte ? 
                <Link to="/connexion">Connectez-vous</Link>
            </p>
        </form>
    )
}