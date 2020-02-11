import React, {Component} from "react";

export default class Config extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        fullName: null}
    }

    handleSubmit = (event) => {
    event.preventDefault()
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            fullName: event.target.value
        })
    };

    render() {
        const{fullName} = this.state;
        return (
            <div>
                <p>Votre nom : {fullName}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Nom :</label>
                    <input type="text" name="fullName" onChange={this.handleInputChange}/>
                    <button>Envoyer</button>
                </form>
            </div>
        );
    }
}