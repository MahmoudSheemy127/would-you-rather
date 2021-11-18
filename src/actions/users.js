import { _getUsers } from "../util/DATA"
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from "react-redux-loading-bar"


export const GET_USERS = 'GET_USERS'
export const SELECT_USER = 'SELECT_USER'

export const getUsers = (users) => ({
    type:GET_USERS,
    users
})

export const selectUser = (id) => ({
    type:SELECT_USER,
    id
})
//thunk middleware passes dispatch as an argument to functions
export const handleGetUsers = () => {
    return (dispatch) => {
        console.log("Hey");
        dispatch(showLoading())
        _getUsers().then((users) => {
            dispatch(getUsers(users))
        }).then(() => dispatch(hideLoading())).catch((err) => {
            console.log("err getting users ",err);
        })
    }
}