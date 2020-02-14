import React, { Component } from "react";
import './Timer.css';


export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        }
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const {seconds} = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {seconds} = this.state;
        return (
            <button className="timer" onClick={(e) => {e.preventDefault(); }}>{seconds}</button>
        )
    }
}