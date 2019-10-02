import React, {Component} from 'react';
import './App.css';
import GameBoard from "./GameBoard.js";
import Control from "./Control.js";
/*
Notes:

Default board size is [18, 18];

Need to figure out starting shape patterns.


*/

const BoardSizes = [
	18,
	36,
	72,
	144,
];

const StartPatterns = [];


class App extends Component{
	constructor(props){
		super(props);
		let defaultSize = 0;
		let defaultBoard = this.initializeBoard(defaultSize);
		this.state = {
			boardSize: defaultSize,
			board: defaultBoard
			//start pattern
		};
		this.resetBoard = this.resetBoard.bind(this);
	}

	//setPattern(board){}


	//setBoardSize


	resetBoard(){
		this.setState({board : this.initializeBoard(this.state.boardSize)});
	}

	
	initializeBoard(sizeSelection){
		let size = BoardSizes[sizeSelection];
		let defaultBoard = new Array(size);
		for(let i=0; i < defaultBoard.length; i++){
			defaultBoard[i] = new Array(size);
			for(let j=0; j < defaultBoard[i].length; j++){
				defaultBoard[i][j] = false;
			}
		}
		//return setPattern(defaultBoard);
		return defaultBoard;
	}

	render() {
		console.log(this.state.board);
		return (
			<div className="App">
				<header className="App-header">
					<h2>Game of Life</h2>
				</header>
				<GameBoard board={this.state.board}/>
				<Control resetBoard={this.resetBoard}/>
			</div>
		);
	}
}
export default App;
