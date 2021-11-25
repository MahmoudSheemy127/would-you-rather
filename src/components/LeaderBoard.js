import { TableCell, TableContainer, TableHead, Table, TableBody, TableRow, Avatar, Typography, ListItem } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const LeaderBoard = () => {
    const {users} = useSelector((state) => state);
    const compare = (a,b) => {
        if((Object.keys(users[a].answers).length + users[a].questions.length) > (Object.keys(users[b].answers).length + users[b].questions.length))
        {
            return -1;
        }
        else if((Object.keys(users[a].answers).length + users[a].questions.length) > (Object.keys(users[b].answers).length + users[b].questions.length))
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    return (
        <div className='leaderboard'>
            <TableContainer sx={{width:800}}>
                <Table >
                    <TableHead>
                        <TableCell sx={{fontSize:20}}>
                            Rank
                        </TableCell>
                        <TableCell>
                            User
                        </TableCell>
                        <TableCell>
                            Answers
                        </TableCell>
                        <TableCell>
                            Questions
                        </TableCell>
                        <TableCell>
                            Activity
                        </TableCell>
                    </TableHead>
                    <TableBody>
                    {Object.keys(users).sort(compare).map((user,index) => 
                        <TableRow key={index}>
                            <TableCell>
                                {index+1}
                            </TableCell>
                            <TableCell sx={{fontSize:20}}>
                                <ListItem>
                                <Avatar src={users[user].avatarURL}></Avatar>
                                <Typography>
                                    {users[user].name}
                                </Typography>
                                </ListItem>
                            </TableCell>
                            <TableCell>
                                {Object.keys(users[user].answers).length}
                            </TableCell>
                            <TableCell>
                                {users[user].questions.length}
                            </TableCell>
                            <TableCell>
                                {Object.keys(users[user].answers).length + users[user].questions.length}
                            </TableCell>
                        </TableRow>                    
                    
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default LeaderBoard
