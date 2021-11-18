import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { Stack, Typography } from '@mui/material'

const PollOptions = (props) => {

    const [Render,setRender] = useState(false)

    const {id,option} = props
    const {polls} = useSelector((state) => state)
    console.log(polls,id);
    const [MyOption,setMyOption] = useState({},[])
    const [SecondOption,setSecondOption] = useState({},[])
    const [FirstOptionLabel,setMyOptionLabel] = useState("",[])
    const [SecondOptionLabel,setSecondOptionLabel] = useState("",[])

    const whichOption = () => {
        if(option == 'optionOne')
        {
            setMyOption(polls[id].optionOne);
            setSecondOption(polls[id].optionTwo);
            setMyOptionLabel('A')
            setSecondOptionLabel('B')
        }
        else{
            setMyOption(polls[id].optionTwo);
            setSecondOption(polls[id].optionOne);
            setMyOptionLabel('B')
            setSecondOptionLabel('A')
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
        <Stack>
        <div className="option">
            <Typography>{FirstOptionLabel} {MyOption.text}</Typography>
            <div className="selected percentage">{MyOption.votes.length}</div>
            <span id="answer">My Answer</span>
        </div>
        <div className="option">
            <Typography>{SecondOptionLabel} {SecondOption.text}</Typography>
            <div className="percentage">{SecondOption.votes.length}</div>
        </div>                                
        </Stack>        
        }        
        </>            
    )
}

export default PollOptions
