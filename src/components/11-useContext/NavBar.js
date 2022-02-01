import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li className="nav-link active" >
        //             <Link to={'/'} >Home</Link>
        //         </li>
        //         <li className="nav-link">
        //             <Link to={'/login'} >Login</Link>
        //         </li>
        //         <li className="nav-link">
        //             <Link to={'/about'} >About</Link>
        //         </li>
        //     </ul>
        // </nav>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to={'/'} className="navbar-brand" >useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName={'active'} to={'/'} className="nav-item nav-link " >Home</NavLink>
                        <NavLink exact activeClassName={'active'} to={'/login'} className="nav-item nav-link" >Login</NavLink>
                        <NavLink exact activeClassName={'active'} to={'/about'} className="nav-item nav-link " >About</NavLink>
                    </div>
                </div>
            </nav>
    )
}
