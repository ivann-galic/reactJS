import React from "react";
import {randomNb} from "./Number";
import './Home.css';
import Timer from "./Timer";

const nbRandom = randomNb(101);
var count = 0;


export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberToFind: nbRandom,
			entry: null,
			infos: '',
			name: '',
			essais: null,
			player:[{
				playerName: '',
				winLoose:'',
				score: null
			}],
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
			this.setState({infos :"Gagné !"});
			this.componentWillUnmount();
		}
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
		console.log(this.state.name);
	};


	replay (e) {
		e.preventDefault();
		this.setState({numberToFind: randomNb(101), entry: null, infos: 'Perdu !' });
	};



	render = () => {
		const { score } = this.props;

		return (
			<div className="container">
				<div className="card">
					<div class="txt">
						<form>
							<label class="name-label">Votre nom :</label>
							<input id="name-form" type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
							<p>A vous de jouer {this.state.name} !</p>
							<label class="number-label">Entrez un nombre entre 0 et 100 :</label>
							<input id="number-form" type="number" value={this.state.entry} onChange={e => this.setState({entry: e.target.value})}/>
							<button id="submit-btn" onClick={e => this.play(e)} >Envoyer</button>
							<button id="restart-btn" onClick={(e)=>this.replay(e)}>Recommencer</button>
							<Timer />
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