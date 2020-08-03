import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Component } from 'react';

/*export default function showProgress(){
    return(
        <ProgressBar variant="success" now={40} />
    )
}*/
class GetProgress extends Component {
    render(){
        return(
            <div>
                <h1>Hello All</h1>
                <ProgressBar variant="success" now={40} />
            </div>
        )
    }
}

export default GetProgress;