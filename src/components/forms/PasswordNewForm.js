import { Link } from "react-router-dom";

export function PasswordNewForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.password} placeholder="Nouveau mot de passe" onChange={e => 
                    props.setPassword(e.target.value)}/>            
            </div>
            <div className="form-group">
                <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.password_confirmation} placeholder="Confirmer le mot de passe" 
                    onChange={e => props.setPassword_confirmation(e.target.value)}/>            
            </div>
            <button className="btn btn-primary btn-block btn-signin" 
            disabled={props.isDisabled} onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Reinitialiser"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous n'avez pas de compte ?
                <Link to="/inscription"> Inscrivez-vous</Link>
            </p>
        </form>
    )
}