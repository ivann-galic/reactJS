import React, {Component} from "react";

import App from "./App";

export default class Config extends React.Component {

    state={name: null};

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    submit = e => {
        e.preventDefault();
        return (this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Nom :</label>
                    <input type="text" id="name" onChange={this.change}/>
                    <button>Envoyer</button>
                </form>
            </div>
        );
    }

    getName() {
        return this.change;
    }
}
