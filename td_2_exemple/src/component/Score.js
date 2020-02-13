import React from "react";
import './Score.css';


export default class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myTimer: 0
        }
    }

    render () {

        startTimer () {
            this.myInterval = setInterval(() => {
                this.setState(prevState => ({
                    myTimer: prevState.count + 1
                }))
            }, 1000)
        }

        clearTimer () {
            clearInterval(this.myInterval)
        }

        return (
            <div>
                <h1>Time : {myTime}</h1>
            </div>
        );
    }
}