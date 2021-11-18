import { GET_USERS } from "../actions/users"
import {ADD_VOTE, POST_POLL} from "../actions/polls"

const users = (state={},action) => {
    switch(action.type){
        case GET_USERS:
            return action.users
        case ADD_VOTE:
            return {
                ...state,
                [action.autheduser]:{
                    ...state[action.autheduser],
                    answers:{
                        ...state[action.autheduser].answers,
                        [action.id]: action.answer
                    }
                }
            }
        case POST_POLL:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }
    }
    return state
}

export default users;