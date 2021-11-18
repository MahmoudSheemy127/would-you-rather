import { GET_POLLS, ADD_VOTE, POST_POLL } from "../actions/polls";



const polls = (state={},action) => {
    switch(action.type){
        case GET_POLLS:
            return action.polls
        case ADD_VOTE:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    [action.answer]:{
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat(action.autheduser)
                    }
                }
            }
        case POST_POLL:
            return{
                ...state,
                [action.question.id]: action.question
            }
    }
    return state;
}

export default polls