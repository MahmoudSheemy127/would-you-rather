import { Typography } from '@mui/material'
import React,{useEffect} from 'react'
import { useHistory } from 'react-router'
const Error = () => {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        },3000)
    },[])
    return (
        <div style={{marginTop:'200px'}}>
            <Typography variant="h3">
                ERROR 404 PAGE NOT FOUND!
            </Typography>
        </div>
    )
}

export default Error
