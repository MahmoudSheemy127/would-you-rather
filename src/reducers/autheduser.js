import { SELECT_USER } from "../actions/users";


const autheduser = (state ="",action) => {
    switch(action.type){
        case SELECT_USER:
            return action.id 
    }
    return state
}

export default autheduser;