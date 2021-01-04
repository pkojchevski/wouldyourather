import React, { Component } from 'react'
import { Card, Form, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../logo.svg'
import { getUsersAsync } from '../actions/users'
import { setAuthedUser } from '../actions/auth'
import { withRouter} from 'react-router-dom'
import Dropdown from '../components/Dropdown'

class Login extends Component {
    state = {
        user:null
    }

    componentDidMount() {
       this.props.dispatch(getUsersAsync())
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.user))
        this.props.history.push('/')
    }


    handleDropdownSelect = (user) => {
        this.setState({user})
    }
   
    render() {
        const { user } = this.state
        const { users } = this.props
        return (
            <Card className="w-75">
              <Card.Header>
                  <h3 className="font-weight-bold text-center">Welcome to the Would You Rather App</h3>
                  <p className="text-center">Please sign in to continue</p>
              </Card.Header>
              <Card.Body className="mx-auto">
                 <Image src={logo} width="350" alt="img" className="signin-logo"/>
                 <h2 className="text-success text-center">Sign in</h2>
                 <Form className="w-100">
                     <Form.Group>
                        {
                            users && 
                            <Dropdown users={users} onDropDownSelect={this.handleDropdownSelect}/>
                        }
                    </Form.Group>
                     <Button className="btn btn-success btn-block" type="submit" onClick={this.handleSubmit} disabled={!user}>
                        Sign in
                     </Button>
                </Form>
              </Card.Body>
            </Card>  
        )
    }
}

Login.propTypes = {
   users:PropTypes.array
}

const mapStateToProps = ({users}) => {
    return {
    users:Object.values(users)
}
}

export default withRouter(connect(mapStateToProps)(Login))