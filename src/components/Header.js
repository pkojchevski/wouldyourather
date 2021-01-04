import React from 'react';
import {NavLink} from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { logout } from '../actions/auth'
import { connect } from 'react-redux'
import { Redirect  } from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = ({isAuth, authedUser, dispatch}) => {

    const handleLogout = () => (
        dispatch(logout())
    )
    
    return (
        <div className="nav-container">
  <ul>
              <li>
                <NavLink exact to="/">
                    <div className="trapezoid"></div>
                    <span className="text">Home</span>
                </NavLink>
                </li>

                <li>
                <NavLink to="/new-question">
                    <div className="trapezoid"></div>
                    <span className="text">New Question</span></NavLink> 
                </li>

                <li>
                <NavLink to="/leader-board"> 
                    <div className="trapezoid"></div>
                    <span className="text">Leader Board</span>
                </NavLink>  
                 </li>

                 {isAuth ? (
                     <>
                     <li className="ml-5 mr-2">
                     <NavLink to="/leader-board"> 
                        <div className="user-info"></div>
                        <span className="user-info__text">Hello, { authedUser.name }
                            <span>
                                <Image width='25' className="ml-1" src={authedUser.avatarURL} alt="image" rounded/>
                            </span>
                        </span>
                    </NavLink>  
                     </li>
 
                     <li>
                     <NavLink to="/logout" onClick={handleLogout}>
                        <div className="trapezoid"></div>
                        <span className="text">Logout</span>
                    </NavLink>  
                     </li>
                </>
                 ) : (
                    <li>
                     <Redirect to ="/login">
                        <div className="trapezoid"></div>
                        <span className="text">Login</span>
                    </Redirect>  
                  </li>)}
  </ul>
  <div className="hr"></div>
</div>

    )


}

NavLink.propTypes = {
    authedUser: PropTypes.object,
    isAuth:PropTypes.bool,
    dispatch: PropTypes.func
};

const mapStateToProps = ({auth}) => ({
    authedUser:auth.authedUser,
    isAuth: !!auth.authedUser,
    
})

export default connect(mapStateToProps)(Header);
