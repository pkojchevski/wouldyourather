import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class NavLink extends React.Component {

    state = {
        className:''
    }

    compopnentDidMount() {
        this.setState({className: this.props.location.pathname === this.props.to ? 'active' : ''})
    }

    handleClick = () => {
        this.setState({className:"active"})
    }
    render() {
    const { className } = this.state

        return (
            <>
               <span className="text" onClick ={() => className = 'active'}>{this.props.text}</span>
                <Link className={className} {...this.props}>
                    {this.props.children}
                </Link>
             </>  
        
        );
    }
}

NavLink.propTypes = {
    text: PropTypes.string
};

export default NavLink;