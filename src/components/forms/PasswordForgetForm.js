import { Link } from "react-router-dom";

export function PasswordForgetForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="email" className="form-control" 
                    value={props.email} placeholder="Email" onChange={e => 
                    props.setEmail(e.target.value)}/>            
            </div>
            <button className="btn btn-primary btn-block btn-signin" 
            disabled={props.isDisabled} onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Valider"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous n'avez pas de compte ?
                <Link to="/inscription"> Inscrivez-vous</Link>
            </p>
        </form>
    )
}