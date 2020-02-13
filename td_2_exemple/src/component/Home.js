import React from "react";
import {randomNb,replay} from "./Number";
import './Home.css';

const nbRandom = randomNb(101);
var count = 0;

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberToFind: nbRandom,
			entry: null,
			infos: ''
		}
	};

	play (e) {
		e.preventDefault();

		count++;

		if(this.state.numberToFind>this.state.entry){
			this.setState({infos :"C'est plus grand !"})
		}
		else if(this.state.numberToFind<this.state.entry){
			this.setState({infos :"C'est plus petit !"})
		}
		else {
			this.setState({infos :"Gagné !"})
		}

//     if (nb !== entry) {
//         if (nb < entry){
//             infos = "C'est plus petit !";
//         }else if (nb > entry){
//             infos = "C'est plus grand !";
//         }
//     }
//
//     if(nb == entry){
//         infos = "Gagné !";
//
// /*        if (myTable.length === 5) {
//             myTable.shift();
//         }
//         myTable.push([myRandom,counter]);
//         displayTable();*/
//         win = true;
//     }
		this.setState({entry: null});
		console.log(this.state.numberToFind);
		console.log(this.state.entry);
		console.log(this.state.infos);
	};


	replay (e) {
		e.preventDefault();
		this.setState({numberToFind: randomNb(101), entry: null, infos: 'Perdu !' });
	};

	render = () => {

		return (
			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label>Entrez un nombre entre 0 et 100 :</label>
							<input id="number-form" type="number" value={this.state.entry} onChange={e => this.setState({entry: e.target.value})}/>
							<button id="submit-btn" onClick={e => this.play(e)} >Envoyer</button>
							<button id="restart-btn" onClick={(e)=>this.replay(e)}>Recommencer</button>
						</form>
						<div className="reponse">
							<p>{this.state.infos}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}