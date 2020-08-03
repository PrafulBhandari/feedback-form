import React from 'react';
import Questions1 from './Questions.json';
import { Slider } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
const sliderStyle = {
    width:'30%',
    align:"center"
}


export default function getQuestions(){
    
 return(
    <div className="post">
        <BorderLinearProgress variant="determinate"  value={33} />
        &nbsp; 
        {
            
            Questions1.map((post, index) => {
                return (
                    <div align="center">

                        <div align="center" style={{ backgroundColor: 'lightblue', width: '50%' }}>
                            p;
                            if (index)
                            <p key={index} style={{ fontFamily: "Arial" }}>{post.questionNum}) {post.questionVal}</p>
                            &nbsp;
                            &nbsp;
                        </div>
                     &nbsp;
                        <div style={sliderStyle}>
                            <Slider
                                defaultValue={0}
                                //getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-small-steps"
                                step={1}
                                marks
                                min={0}
                                max={10}
                                valueLabelDisplay="auto" />
                        </div>
                &nbsp;

                    </div>
                );
            }
            )
        }
        <div align="center">
            <a href="nxtPage.js"><Button variant="contained" color="primary"> Next </Button></a>
        </div>
        </div>
    )
}