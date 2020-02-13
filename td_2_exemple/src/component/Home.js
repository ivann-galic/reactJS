import React from "react";
import {randomNb} from "./Number";
import './Home.css';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberToFind: null,
			entry: null
		}
	}

	change = e =>{
		this.setState({
			[e.target.entry]: e.target.value
		})
	};

	onSubmit = (e) => {
		console.log(this.state);
	};

	render() {
		var nbToFind = randomNb(101);
		var entry = null;

		return (

			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label>Entrez un nombre entre 0 et 100 :</label>
							<input type="number" value={this.state.entry} onChange={e => this.change(e)}/>
							<button id="submit-btn" type="submit" onClick={this.onSubmit()} >Envoyer</button>
							<button id="restart-btn">Recommencer</button>
						</form>
						<div className="reponse">
							<p>A trouver : {nbToFind}, rentré :  </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}