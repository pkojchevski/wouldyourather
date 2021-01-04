import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RankingUserItem from '../components/RankingUserItem'
import { rankUsers } from '../utils'

class LeaderBoard extends Component {

    render() {
        const { sortedUsers } = this.props;
        return (
            <>
                {sortedUsers && 
                sortedUsers
                   .map((user, id) => (
                    <RankingUserItem key = {id} user={user} rank= {id}/>
                ))}
           </>
        );
    }
}

LeaderBoard.propTypes = {
   sortedUsers:PropTypes.array
};

const mapStateToProps = ({users}) => ({
    sortedUsers: rankUsers(users)
})

export default connect(mapStateToProps)(LeaderBoard);