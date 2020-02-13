import React from "react";
import {randomNb, play} from "./Number";
import './Home.css';

const nbRandom = randomNb(101);

export default class Home extends React.Component {

		state = {
			numberToFind: null,
			entry: null,
			infos: ''
		};



	render() {

		return (

			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label>Entrez un nombre entre 0 et 100 :</label>
							<input type="number" value={this.state.entry} onChange={e => this.setState({entry: e.target.value})}/>
							<button id="submit-btn" onClick={(e) => play(e, nbRandom, this.state.entry, this.state.infos)} >Envoyer</button>
							<button id="restart-btn">Recommencer</button>
						</form>
						<div className="reponse">
							<p>A trouver : {nbRandom}, rentré : {this.state.entry} {this.state.infos}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}