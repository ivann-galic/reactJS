import React from "react";
import {randomNb} from "./Number";
import './Home.css';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var nbToFind = randomNb(101);

		return (

			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label>Entrez un nombre entre 0 et 100 :</label>
							<input type="number" name="number"/>
							<button id="submit-btn" type="submit" >Envoyer</button>
							<button id="restart-btn">Recommencer</button>
						</form>
						<div className="reponse">
							<p>Le nombre à trouver est : {nbToFind}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}