import React from 'react';
import Questions2 from './Questions2.json';
import { Slider } from '@material-ui/core';

const sliderStyle = {
    width:'30%',
    align:"center"
}

export default function getQuestions(){
    
    return(
        <div className="post">
            {
                Questions2.map(post => {
                    return(
                      
                    <div align="center"> {post.questionNum}) {post.questionVal}
                    <p></p>
                    <div style={sliderStyle}>
                    <Slider 
                    defaultValue={0}
                    //getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    marks
                    min={0}
                    max={10}
                    valueLabelDisplay="auto"                 
                    />
                    </div>
                    <p></p>
                    </div>
                    )
                }
                    )
            }

        </div>
    )
}