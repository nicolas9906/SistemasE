import { Link, NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark  bg-dark ">
            
            <Link 
                className="navbar-brand" 
                to="/formulario"
            >
                Formulario
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/preguntas"
                    >
                        Preguntas
                    </NavLink>

                   
                </div>
            </div>
        </nav>
    )
}