import React from "react";

export default class Home extends React.Component
{
    constructor({fullName}){
        super();
        this.state = {
            fullName: fullName
        }
    }

    componentDidUpdate({fullName}) {
        this.setState({...this.state, fullName});
    }

    render() {
        const{fullName} = this.state;
        return (
            <div>
                <h2>Acceuil</h2>
                <p>Hello {fullName} !</p>
            </div>
        );
    }
}