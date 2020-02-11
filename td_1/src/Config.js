import React from "react";

export default class Config extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fullName: ''
        }
    }

    handleInputChange = (event) => {
        this.props.fullName(event.target.value);
    };

    render() {
        const{fullName} = this.state;
        return (
            <div>
                <form>
                    <label>Nom :</label>
                    <input type="text" name="fullName" onChange={this.handleInputChange}/>
                </form>
            </div>
        );
    }
}