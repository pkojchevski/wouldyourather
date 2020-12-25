import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RankingUserItem from '../components/RankingUserItem'

class LeaderBoard extends Component {

    render() {
        const { users } = this.props;
        return (
            <>
           {users && users.map(user => (
            <RankingUserItem user={user}/>
           ))}
           </>
        );
    }
}

LeaderBoard.propTypes = {

};

const mapStateToProps = ({users}) => ({
    users: Object.values(users)
})

export default connect(mapStateToProps)(LeaderBoard);