import { Link } from "react-router-dom";
import { Components } from "..";

export function LoginForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="email" className="form-control 
                rounded-pill" value={props.useUser.email} placeholder="Email" 
                onChange={e => props.useUser.setEmail(e.target.value)}/>           
             </div>
            <div className="form-group mg-b-50">
                <Components.CustomPasswordInput setPassword={props.useUser.setPassword}
                isDisabled={props.isDisabled} placeholder="Mot de passe" 
                password={props.useUser.password}/>
            </div>

            <button className="btn btn-primary btn-block btn-signin rounded-pill" 
            disabled={props.isDisabled} onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Connexion"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous n'avez pas de compte ?
                <Link to="/inscription"> Inscrivez-vous</Link>
            </p>
            <p className="mg-b-0 text-center pt-3">
                <Link to="/motdepasse-oublie">Mot de passe oublié ?</Link>
            </p>
        </form>
    )
}