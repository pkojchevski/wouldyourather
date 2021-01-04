

export const getAnsweredQuestionsFromUser = (questions, user) => {
    
return questions && Object.values(questions).filter(question => question.optionOne.votes.includes(user.id) && question.optionOne.votes.includes(user.id))

}


export const getUnansweredQuestionsFromUser = (questions, user) => {
    return questions && Object.values(questions).
          filter(question => !question.optionOne.votes.includes(user.id) && !question.optionOne.votes.includes(user.id))
    
    }
 export const rankUsers = (users) => {
    const rankedUsers =  Object.values(users)
              .map(user => ({...user, rank:Object.keys(user.answers).length + user.questions.length}))
              .sort((a, b) => b.rank - a.rank)
    return rankedUsers;
 }