import React from 'react'
import { LinearProgress } from '@material-ui/core';

const Loading = () => {
    return (
        <div style={{width:'100%',margin:'auto'}}>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
    )
}

export default Loading
