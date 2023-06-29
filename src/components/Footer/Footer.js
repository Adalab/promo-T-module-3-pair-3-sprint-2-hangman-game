import { Link, NavLink } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li className="footer__menu-item">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active footer__menu-link" : ""
                        } to='/'  >A jugar</NavLink>
                    </li>
                    <li className="footer__menu-item">
                    <NavLink className= {({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active footer__menu-link" : ""
                        } to= '/instructions' 
                        >¿Cómo se juega?</NavLink>

                    </li>
                    <li className="footer__menu-item">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active footer__menu-link" : ""
                        } to= '/options'>Más opciones</NavLink>
                    </li>
                </ul>
            </nav>
            <small className="footer__copy">© Adalab</small>
        </footer>
    )
}





export default Footer
