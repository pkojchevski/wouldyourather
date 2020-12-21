import React, { Component } from 'react'
import CardTitle from '../components/CardTitle'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../logo.svg'
import { getUsersAsync } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import _ from 'lodash';
import { withRouter} from 'react-router-dom'

class Login extends Component {
    state = {
        id:''
    }

    componentDidMount() {
       this.props.dispatch(getUsersAsync())
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = this.props.users.filter(el => el.id === this.state.id)[0]
        console.log('user:', user)
        this.props.dispatch(setAuthedUser(user))
        this.props.history.push('/')
    }

    handleChange = (e) => {
        console.log(...e.target.value)
        this.setState({id:e.target.value})
    }
   
    render() {
        const {id } = this.state
        const { users } = this.props
        return (
        <div className="card">
            <CardTitle title="Welcome to the Would You Rather App" subtitle="Please signin to continue"/>
            <div className="card-body">
                <img src={logo} alt="img" className="signin-logo"/>
                <h2>Signin</h2>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="select">
                      <select  onChange={this.handleChange} >
                      <option value="" delected disabled>Select user</option>
                        {users && users.map(user => (
                        <option key = {user.id} value={user.id}>{user.name}</option>
                        ))}
                      </select>
                    </div>
                    <button className="btn btn-green full-width" type="submit">Signin</button>
                </form>
            </div>
        </div>
        )
    }
}

Login.propTypes = {

}

const mapStateToProps = ({users}) => {
    return {
    users:Object.values(users)
}
}

// const mapDispatchToProps = dispatch => ({
//     setAuthedUser: user => dispatch(setAuthedUser(user))
//   });

export default withRouter(connect(mapStateToProps)(Login))