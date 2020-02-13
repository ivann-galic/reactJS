import React from "react";
import {randomNb} from "./Number";
import './Home.css';

export default class Home extends React.Component {

		state = {
			numberToFind: randomNb(101),
			entry: null
		};

	onSubmit = (e) => {
		console.log(this.state);
	};

	render() {

		return (

			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label>Entrez un nombre entre 0 et 100 :</label>
							<input type="number" value={this.state.entry} onChange={e => this.setState({entry: e.target.value})}/>
							<button id="submit-btn" type="submit" onClick={this.onSubmit()} >Envoyer</button>
							<button id="restart-btn">Recommencer</button>
						</form>
						<div className="reponse">
							<p>A trouver : {this.state.numberToFind}, rentré : {this.state.entry} </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}