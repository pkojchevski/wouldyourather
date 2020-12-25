import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LeaderBoard from './pages/LeaderBoard'
import NewQuestion from './pages/NewQuestion'
import './App.css';
import Nav from './components/Nav'
import { LoadingBar } from "react-redux-loading";
import Login from './pages/Login'

class App extends React.Component {

  render() {
    const { isAuth } = this.props
    return (
      <>
      { isAuth ? (<Router>
        <LoadingBar />
          <div className="container">
            <Nav />
          </div>
          <Route path="/" component={Home} />
          <Route path="/new-question" component={NewQuestion} />
          <Route path="/leader-board" component={LeaderBoard} />
          <Route path="/login" component={Login} />
      </Router>)
      : (
        <Router>
        <Route path="/" component={Login} />
        </Router>
      )
  }
    
    </>
    
 
      );
  }

}

const mapStateToProps = ({authedUser}) => {
  console.log('authedUser:', authedUser)
  return {
     isAuth: !!authedUser
  }
}
export default App;
