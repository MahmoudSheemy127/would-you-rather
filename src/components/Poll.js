import { Avatar, Button,Stack, Card, CardActions, CardHeader, Typography, CardContent, Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { formatDate } from '../util/helpers'
import { useHistory } from 'react-router-dom';


const Poll = (props) => {
    const {id} = props;
    const {users,polls} = useSelector((state) => state);
    const history = useHistory()
    const navigatePoll = () => {
        history.push(`/answer/${id}`)
    }
    return (
        <div className='card'>
            <Card id='poll-card' sx={{width:400}}>
                <CardHeader
                avatar={
                <Avatar src={users[polls[id].author].avatarURL} />
                }
                title={users[polls[id].author].name}
                subheader={formatDate(polls[id].timestamp)}
                />
                <CardContent sx={{textAlign:'center'}}>
                    <Stack spacing={1}>
                        <Typography variant="h4">Would You Rather</Typography>
                        <Typography variant="p">{polls[id].optionOne.text.split(" ")[0]}-...</Typography>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Container>
                        <Stack>
                        <Button onClick={navigatePoll}  variant="outlined">View the Poll</Button>
                        </Stack>
                    </Container>
                </CardActions>
            </Card>
        </div>
    )
}

export default Poll
