import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRoute = ({component: Component, exact, path}) => {
    const {autheduser} = useSelector((state) => state)
    return(
        <Route 
        exact={exact}
        path={path}
        render={(props) => (
        autheduser ? <Component /> : <Redirect  to={{
            pathname:"/",
            state: {from: path} //props to the router using state object      
            }}></Redirect>
        )}
        />
    )
}

export default PrivateRoute
