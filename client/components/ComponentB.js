import React from 'react'
import { useSelector } from 'react-redux'

function ComponentB() {

    const { message } = useSelector(state => state.userReducer)

    return (
        <div style={{marginTop: '50px'}}>
            <h3>Component B</h3>
            <p>{message}</p>
        </div>
    )
};



export default ComponentB;