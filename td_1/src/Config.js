import React from "react";

export default class Config extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fullName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    handleInputChange = (event) => {
        this.setState({
            fullName: event.target.value
        })
        this.props.fullName(event.target.value);
    };

    render() {
        const{ fullName } = this.state;
        return (
            <div>
                <p>Votre nom : {fullName}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Nom :</label>
                    <input type="text" name="fullName" onChange={this.handleInputChange}/>
                </form>
            </div>
        );
    }
}