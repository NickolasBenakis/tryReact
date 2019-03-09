import React from 'react';


const Joke = (props) => {
    // console.log(props);


    return (
        <div>
            <p style={{ display: !props.question && "none" }}>Question: {props.question}</p>
            <p style={{ color: !props.question && "red" }}>Answer: {props.punchLine}</p>
        </div>


    )

}


export default Joke;