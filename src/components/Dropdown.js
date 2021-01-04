import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDown } from 'react-icons/fa'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen:false,
      selectedOption:null
    }

    this.dropdownRef = React.createRef()
  }

  
    toggling = () => (this.setState((prevState) => ({...prevState, isOpen: !prevState.isOpen})));
  
    onOptionClicked = value => () => {
      this.setState({isOpen: false})
      this.setState({selectedOption:value})
      this.props.onDropDownSelect(value)
    };

    handleClickOutside = (event) => {
      if (this.dropdownRef && !this.dropdownRef.current.contains(event.target)) {
         this.setState({isOpen:false})
      }
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
    
    render() {
        const {users} = this.props
        const { isOpen, selectedOption } = this.state
        
    return (
        <div className="main" ref={this.dropdownRef}>
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={this.toggling}>
            { selectedOption 
                ? 
                (
                    <div>
                    <img src={selectedOption.avatarURL} alt="user_image" width='30' className="mr-3"/>
                    <span>{selectedOption.name}</span>
                    <span className="dropdown-icon"><FaAngleDown /></span>
                </div>
                ) 
                : 
                (               
                  <span>Select user <span className="dropdown-icon"><FaAngleDown /></span></span>
                  )
            }
          </div>
          {isOpen && (
            <div className="dropdown-list-container">
              <ul className="dropdown-list">
                {users.map(user => (
                  <li className="dropdown-list-item" onClick={this.onOptionClicked(user)} key={user.id}>
                    <div>
                        <img src={user.avatarURL} alt="user_image" width='30' className="mr-3"/>
                        <span>{user.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
                }
};


Dropdown.propTypes = {
   users:PropTypes.array
};


export default Dropdown;
