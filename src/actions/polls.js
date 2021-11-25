import { _getQuestions } from "../util/DATA"
import { showLoading, hideLoading } from "react-redux-loading-bar"
import { _saveQuestionAnswer } from "../util/DATA"
import { _saveQuestion } from "../util/DATA"

export const GET_POLLS ='GET_POLLS'
export const GET_ANSWERED_POLLS = 'GET_ANSWERED_POLLS'
export const ADD_VOTE = 'ADD_VOTE';
export const POST_POLL = 'POST_POLL'

export const getPolls = (polls) => ({
    type:GET_POLLS,
    polls
})


export const addVote = (autheduser,id,answer) => ({
    type: ADD_VOTE,
    id,
    autheduser,
    answer
})

export const addPoll = (question) => ({
    type:POST_POLL,
    question
})


export const handleAddVote = (id,answer) => {
    console.log("Question id: ",id);
    return (dispatch,getState) => {
        const {autheduser} = getState();
        console.log("State from bloody action ",autheduser);
        dispatch(showLoading())
        _saveQuestionAnswer({authedUser: autheduser,qid: id,answer}).then((data) => {
            dispatch(addVote(autheduser,id,answer))
        }).then(() => dispatch(hideLoading())).catch((err) => {
            alert("Error occured please try again later ",err);
            console.log(err);
        })
    }
}

export const handleGetPolls = () => {
    return (dispatch) => {
        dispatch(showLoading())
        _getQuestions().then((polls) => {
            dispatch(getPolls(polls))            
        }).then(() => dispatch(hideLoading())).catch((err) => {
            console.log("error occured fetching polls ", err);
        })
    }
}

export const handleAddPoll = (answerA,answerB) => {
    return (dispatch,getState) => {
        const {autheduser} = getState()
        dispatch(showLoading());
        _saveQuestion({optionOneText:answerA, optionTwoText:answerB,author:autheduser}).then((question) => {
            dispatch(addPoll(question))
        }).then(() => dispatch(hideLoading())).catch((err) => {
            console.log("Err occurred ",err);
        })
    }
}