import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
       <nav className="nav">
          <nav className="nav">
           <ul>
               <li>
               <NavLink to="/" activeClassName="active">Home</NavLink>
               </li>
               <li>
               <NavLink to="/new-question">New Question</NavLink> 
               </li>
               <li>
               <NavLink to="/leader-board">Leader Board</NavLink>  
                </li>
                <li>
                <NavLink to ="/login">Login</NavLink>  
          
                </li>
                <li>
                <NavLink to="/logout">Logout</NavLink>  
                </li>
           </ul>
       </nav> 

       </nav>
    );
}

export default Nav;
