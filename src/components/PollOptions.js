import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { Grid, Stack, Typography } from '@mui/material'

const PollOptions = (props) => {

    const [Render,setRender] = useState(false)

    const {id,option} = props
    const {polls} = useSelector((state) => state)
    const [MyOption,setMyOption] = useState({},[])
    const [SecondOption,setSecondOption] = useState({},[])
    const [FirstOptionLabel,setMyOptionLabel] = useState("",[])
    const [SecondOptionLabel,setSecondOptionLabel] = useState("",[])
    const [MyOptionPercentage, setOptionPercentage] = useState(0);
    const whichOption = () => {
        if(option == 'optionOne')
        {
            setMyOption(polls[id].optionOne);
            setSecondOption(polls[id].optionTwo);
            setMyOptionLabel('A')
            setSecondOptionLabel('B')
            setOptionPercentage(Math.round((polls[id].optionOne.votes.length * 100) / (polls[id].optionOne.votes.length + polls[id].optionTwo.votes.length)))
        }
        else{
            setMyOption(polls[id].optionTwo);
            setSecondOption(polls[id].optionOne);
            setMyOptionLabel('B')
            setSecondOptionLabel('A')
            setOptionPercentage(Math.round((polls[id].optionTwo.votes.length * 100) / (polls[id].optionOne.votes.length + polls[id].optionTwo.votes.length)))
        }
        setRender(true)
    }

    useEffect(() => {
        console.log(id);
        whichOption()
    },[])

    return (
        <>
        {Render && 
        <Stack spacing={3}>
        <Grid container >
            <Grid item xs={4}>
                <Typography>{FirstOptionLabel} {MyOption.text}</Typography>
            </Grid>
            <Grid item xs={4}>
                <div className="selected percentage">
                    <div className="percentage-bar" style={{width:`${MyOptionPercentage}%`}}>
                        {MyOptionPercentage}%
                    </div>
                </div>
            </Grid>
            <Grid item xs={4}>
                <span id="answer">My Answer</span>
            </Grid>
        </Grid>
        <Grid container >
            <Grid item xs={4} >
            <Typography>{SecondOptionLabel} {SecondOption.text}</Typography>
            </Grid>
            <Grid item xs={4}>
            <div className="percentage">
            <div className="percentage-bar" style={{width:`${100 - MyOptionPercentage}%`}}>
                    {100 - MyOptionPercentage}%
                </div>
            </div>
            </Grid>
        </Grid>
        </Stack>        
        }        
        </>            
    )
}

export default PollOptions
