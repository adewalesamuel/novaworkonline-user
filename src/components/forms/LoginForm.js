import { Link } from "react-router-dom";

export function LoginForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="email" className="form-control" 
                    value={props.useUser.email} placeholder="Email" onChange={e => 
                    props.useUser.setEmail(e.target.value)}/>            </div>
            <div className="form-group mg-b-50">
                <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.useUser.password} onChange={e => 
                    props.useUser.setPassword(e.target.value)} placeholder="Mot de passe" />
            </div>

            <button className="btn btn-primary btn-block btn-signin" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Valider"}
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