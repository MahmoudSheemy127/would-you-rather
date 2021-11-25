import { Avatar, Button,Stack, Card, CardActions, CardHeader, Typography, CardContent, Container } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from '../util/helpers'
import PollOptions from './PollOptions'
import { handleAddVote } from '../actions/polls'
import { useParams} from 'react-router-dom'
import Error from './404'
import { Redirect } from 'react-router'
const AnswerPoll = () => {      
    const {id}= useParams()
    const {users,polls,autheduser} = useSelector((state) => state);
    const dispatch = useDispatch()    
    const submitVote = (e,answer) => {
        e.preventDefault();
        dispatch(handleAddVote(id,answer));
    }

    return (
        <div className='card'>
        {
            polls[id] ?
            <>
                {
                    autheduser ?
                    <Card  sx={{width:600}}>
                        <CardHeader
                        avatar={
                        <Avatar src={users[polls[id].author].avatarURL} />
                        }
                        title={users[polls[id].author].name}
                        subheader={formatDate(polls[id].timestamp)}
                        />
                        <CardContent sx={{textAlign:'center'}}>
                            <Typography>Would You Rather</Typography>
                        </CardContent>
                        <CardActions>
                        <Container>
                        {Object.keys(users[autheduser].answers).includes(id) ? <PollOptions id={id} option={users[autheduser].answers[id]} />:
                        <Stack spacing={1} id='button-stack'>
                            <Button onClick={(e) => submitVote(e,"optionOne")} variant="outlined" >A.{polls[id].optionOne.text}</Button>
                            <Button onClick={(e) => submitVote(e,"optionTwo")} variant="outlined" >B.{polls[id].optionTwo.text}</Button>
                        </Stack>                
                        }
                        </Container>
                        </CardActions>
                    </Card> 
                    :
                    <Redirect to="/home"></Redirect>
                }
            </>
            :<Error />
        }
        </div>
    )
}

export default AnswerPoll
