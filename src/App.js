import React, {Component} from 'react';
import './App.css';
import GameBoard from "./GameBoard.js";
import Control from "./Control.js";
/*
Notes:

Default board size is [18, 18];

Need to figure out starting shape patterns.


*/

// const StartPatterns = [];


class App extends Component{
	constructor(props){
		super(props);
		let defaultSize = 0;
		
		let BoardSizes = [
			18,
			36,
			72,
			144,
		];
		this.state = {
			boardSize: defaultSize,
			boardSizeSelection: BoardSizes,
			board: this.initializeBoard(defaultSize, BoardSizes),
			running: false,
			locked: false
		};

		this.resetBoard = this.resetBoard.bind(this);
		this.startSimulation = this.startSimulation.bind(this);
		this.lockBoard = this.lockBoard.bind(this);
		this.setBoardSize = this.setBoardSize.bind(this);
	}

	//setPattern(board){}


	setBoardSize(index){
		this.setState({
			boardSize: index,
			board: this.initializeBoard(this.state.boardSize, this.state.boardSizeSelection)
		});
	}

	lockBoard(){
		this.setState({locked: !this.state.locked});
	}

	startSimulation(){
		if(this.state.locked === false){
			//shouldn't start
			alert("Cant start, you must lock the board.");
		}else{

		}

	}

	resetBoard(){
		this.setState({board: this.initializeBoard(this.state.boardSize, this.state.boardSizeSelection)});
	}

	
	initializeBoard(sizeSelection, boardSizeList){
		let size = boardSizeList[sizeSelection];
		let defaultBoard = new Array(size);
		for(let i=0; i < defaultBoard.length; i++){
			defaultBoard[i] = new Array(size);
			for(let j=0; j < defaultBoard[i].length; j++){
				defaultBoard[i][j] = false;
			}
		}
		//return setPattern(defaultBoard);
		// return defaultBoard;
		this.setState({board: defaultBoard});
		return defaultBoard;
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<header className="App-header">
					<h2>Game of Life</h2>
				</header>

				<GameBoard 
					board={this.state.board}
					className="GameBoard"
				/>

				<Control 
					startSimulation={this.startSimulation} 
					lockBoard={this.lockBoard} 
					resetBoard={this.resetBoard}
					setBoardSize={this.setBoardSize}
					boardSizeSelection={this.state.boardSizeSelection}
				/>
			</div>
		);
	}
}
export default App;
