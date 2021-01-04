import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LeaderBoard from './pages/LeaderBoard'
import NewQuestion from './pages/NewQuestion'
import { connect } from 'react-redux'
import Header from './components/Header'
import LoadingBar from 'react-redux-loading-bar'
import Login from './pages/Login'
import Question from './pages/Question'
import QuestionReport from './components/QuestionReport'
import PropTypes from 'prop-types';


class App extends React.Component {
  
  render() {
    const { isAuth } = this.props
    return (
      <>
      { isAuth ? (
      <>
        <LoadingBar />
            <Header />
        <div className="container">  
        <Switch> 
            <Route path="/" exact component={Home} />       
            <Route path="/question/:id/report" component={QuestionReport} />
            <Route path="/question/:id" component={Question} />
            <Route path="/new-question" exact component={NewQuestion} />
            <Route path="/leader-board" exact component={LeaderBoard} />
            <Route path="/login" component={Login} />
          </Switch>
          </div>
        </>
)
      : (
          <div className="container">
            <Switch>
              <Route path="/" exact component={Login} />
              <Redirect to="/" />
            </Switch>
          </div> 
      )
  }
    </>
      );
  }

}

App.propTypes = {
  isAuth:PropTypes.bool,
};


const mapStateToProps = ({auth}) => {
  return {
     isAuth: !!auth.authedUser
  }
}
export default connect(mapStateToProps)(App);
