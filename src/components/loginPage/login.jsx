import React, { Component } from 'react'


class Login extends Component {

    constructor(){
        super();
        this.state = {
            answer: "YES"
        }
    }
    render() {

        return (
            <div>
                The answer is : {this.state.answer}
            </div>
        )
    }
}

export default Login;