import React from "react";
import './Score.css';


export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myTimer: 10
        }
    }

    render () {
        const {myTimer} = this.state;
        return (
            <div>
                <h1>Time : {myTimer}</h1>
            </div>
        );
    }

    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                myTimer: prevState.count - 1
            }))
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}