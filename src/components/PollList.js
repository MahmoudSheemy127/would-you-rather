import { ToggleButton, ToggleButtonGroup, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { handleGetPolls } from '../actions/polls';
import {handleGetUsers} from '../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Poll from './Poll';
import { useHistory } from 'react-router-dom';
const PollList = () => {
    //get state
    const state = useSelector((state) => state)
    const [toggle, setToggle] = useState(true);
    const compare = (a,b) => {
        if(state.polls[a].timestamp >  state.polls[b].timestamp)
        {
            return -1;
        }
        else
        {
            return 1;
        }
    }

    return (
        <div className="polls-menu">
            <div className='toggle-poll'>
                <ToggleButtonGroup
                    sx={{}}
                    color='primary'
                    onChange={(e, v) => setToggle(v)}
                    exclusive
                >
                    <ToggleButton value={true}>UnAnswered</ToggleButton>
                    <ToggleButton value={false}>Answered</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <Stack spacing={5}>
                {
                    Object.keys(state.polls).sort(compare).map((key) => {                        
                        //filter out answered and unanswered polls
                        if((state.polls[key].optionOne.votes.includes(state.autheduser) || 
                        state.polls[key].optionTwo.votes.includes(state.autheduser))){
                            return(
                                !toggle && <Poll key={key}  id={key}></Poll>
                            )
                        }
                        else
                        {
                            return(
                               toggle && <Poll key={key} id={key}></Poll>
                            )
                        }
                    })
                }
            </Stack>
        </div>
    )
}

export default PollList
