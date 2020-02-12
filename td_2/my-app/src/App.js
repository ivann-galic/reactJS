import React, {Component} from "react";
import './App.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            myNumber: null
        }
    }

    handleInputChange = (event) => {
        this.props.myNumber(event.target.value);
    };

    render() {
        const{myNumber} = this.state;
        return (
            <div class="container">
                <div class="app">
                    <form>
                        <label>Entrez un nombre entre 0 et 100 :</label>
                        <input type="number" name="myNumber" onChange={this.handleInputChange}/>
                        <button id="submit-btn" type="submit">Envoyer</button>
                        <button >Recommencer</button>
                    </form>
                    <div class="reponse">
                        <p></p>
                    </div>
                </div>
            </div>
        );

    }
}

