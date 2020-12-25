import React from 'react';
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Nav = ({isAuth, authedUser}) => {
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
                {isAuth ? (
                    <>
                    <div>
                        Hello, { authedUser.name }
                        <span>
                            <Image src={authedUser.avatarURL} alt="image" rounded/>
                        </span>
                    </div>
                    <li>
               <NavLink to ="/login">Login</NavLink>  
               </li>
               </>
                ) : (
                    <li>
                    <NavLink to="/logout">Logout</NavLink>  
                    </li>
                )}
                
 

           </ul>
       </nav> 

       </nav>
    );
}

const mapStateToProps = ({authedUser}) => ({
    authedUser,
    isAuth: !!authedUser
})

export default Nav;
