import React,{useState} from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {  Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../actions/users';
import { useHistory} from 'react-router-dom';


const LoginPage = (props) => {
    const state = useSelector((state) => state);
    const [user,setUser] = useState("")
    const dispatch = useDispatch()
    const history = useHistory();
    const navigate = () => {
        dispatch(selectUser(user));
        //Redirect to the route clicked when user is authenticated
        if(props.location.state)
        {
            history.push(`${props.location.state.from}`);
        }
        else{
            history.push('/home');
        }
    }


    return (
        <div className="login-page">
            <Typography variant="h3">Would you Rather app</Typography>
            {/* <h2>Would you rather app</h2> */}
            <div className='template-polls'></div> 
            <div className='select-user'>
            <Autocomplete
            sx={{ width: 600 }}
            options={Object.keys(state.users)}
            onChange={(event, id) => {
                // console.log(id);
                setUser(id)
            }}
            autoHighlight
            getOptionLabel={(option) => state.users[option].name}
            renderOption={(props, option) => (
                <ListItem    {...props}>
                    <ListItemAvatar>
                        <Avatar src={state.users[option].avatarURL}></Avatar>
                    </ListItemAvatar>
                    <ListItemText>{state.users[option].name}</ListItemText>
                </ListItem>
            )}
            renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select a User"
                />
              )}
            >
            </Autocomplete>
            </div>
            <Button onClick={navigate}  disabled={!user} variant="outlined" sx={{width:600, marginTop:10}}>Login</Button>                  
        </div>
    )
}

export default LoginPage
