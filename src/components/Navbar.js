import { Tabs, LinkTab, Tab, Button, Avatar, ListItem, Typography, selectClasses } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectUser } from '../actions/users';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const {users,autheduser} = useSelector((state) => state)    
    const [value, setValue] = React.useState('/home');
    const history = useHistory();
    const dispatch = useDispatch()    
    const handleChange = (event, newValue) => {
      setValue(newValue);
      history.push(newValue)
    };  

    const signOut = () => {
        dispatch(selectUser(""));
    }
   
    return (
        <div>
            {autheduser ?
            <Tabs
             value={value}
             onChange={handleChange}
             textColor="secondary"
             indicatorColor="secondary"
             sx={{border:'1px solid #ccc'}}
            >
            <Tab value="/home" label="Home"></Tab>                
            <Tab value="/question" label="Post Poll"></Tab>                
            <Tab value="/leaderboard" label="Leader Board"></Tab>                
                <ListItem sx={{justifyContent:'flex-end'}}>
                <Avatar src={users[autheduser].avatarURL}></Avatar>
                <Typography>{users[autheduser].name}</Typography>    
                <Button onClick={signOut} variant="outlined" sx={{marginLeft:2}} >Sign Out</Button>
                </ListItem>
                
                
            </Tabs>
            : null            
            }
        </div>
    )
}

export default Navbar
