import { Button, Card, CardActions, Container, Stack, Typography, TextField } from '@mui/material'
import React,{useState} from 'react'
import { handleAddPoll, handleAddVote } from '../actions/polls';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
const QuestionPoll = () => {
    const [optionA,setOptionA] = useState("");
    const [optionB,setOptionB] = useState("");
    const [buttonDisabled, setDisable] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const submitPoll = (e) => {
        e.preventDefault();
        dispatch(handleAddPoll(optionA,optionB))
        history.push("/home");
    }

    return (
        <div className='post-poll'>
            <Card sx={{width:600}}>
                <Container sx={{textAlign:'center'}}>
                    <Typography variant="h4">Post a Poll</Typography>
                    <Typography variant="h6" >Would you Rather</Typography>
                </Container>
                <CardActions>
                <Container>
                    <Stack spacing={1} sx={{textAlign:'center'}}>
                        <TextField value={optionA} onChange={(e) => setOptionA(e.target.value)} variant="outlined" label="Option A"></TextField>
                        <Typography>Or</Typography>
                        <TextField value={optionB} onChange={(e) => setOptionB(e.target.value)} variant="outlined" label="Option B"></TextField>
                        <Button disabled={!(optionA && optionB)} onClick={(e) => submitPoll(e)} variant="outlined">Submit</Button>
                    </Stack>
                </Container>
                </CardActions>
            </Card>
        </div>
    )
}

export default QuestionPoll
