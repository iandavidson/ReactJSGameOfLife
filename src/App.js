import React, {Component} from 'react';
import './App.css';
import GameBoard from "./GameBoard.js";
import Control from "./Control.js";
/*
Notes:

Default board size is [18, 18];
Default update rate is 600

Need to figure out starting shape patterns.


*/

// const StartPatterns = [];


class App extends Component{
	constructor(props){
		super(props);
		let defaultSize = 0;
		
		let SimulationSpeeds = [
			200,
			400,
			600,
			800,
		];

		let BoardSizes = [
			18,
			36,
			72,
			144,
		];
		// this.initializeBoard(defaultSize, BoardSizes, true);
		this.state = {
			boardSize: defaultSize,
			simulationSpeed: 3,
			boardSizeSelection: BoardSizes,
			simulationSpeedSelection: SimulationSpeeds,
			board: this.initializeBoard(defaultSize, BoardSizes),
			running: false,
			locked: false
		};

		this.setRunSpeed = this.setRunSpeed.bind(this);
		this.fillCell = this.fillCell.bind(this);
		this.resetBoard = this.resetBoard.bind(this);
		this.startSimulation = this.startSimulation.bind(this);
		this.lockBoard = this.lockBoard.bind(this);
		this.setBoardSize = this.setBoardSize.bind(this);
	}

	//setPattern(board){}


	setRunSpeed(index){
		if (this.state.running) {
			alert("Simulation is already running");
			return;
		} else if (this.state.locked) {
			alert("Board is locked, unlock to change speed");
			return;
		}
		this.setState({
			simulationSpeed: index
		});
	}

	setBoardSize(index){
		if (this.state.running) {
			alert("Simulation is already running");
			return;
		} else if (this.state.locked) {
			alert("Board is locked, unlock to change board size");
			return;
		}
		this.setState({
			boardSize: index,
			board: this.initializeBoard(index, this.state.boardSizeSelection)
		});
	}

	lockBoard(){
		this.setState({locked: !this.state.locked});
	}

	startSimulation(){
		if(this.state.locked === false){
			//shouldn't start
			alert("Cant start, you must lock the board.");
			return;
		}else{
			this.setState({
				running: !this.state.running
			});
		}
	}

	resetBoard(){
		this.setState({
			running: false,
			locked: false,
			board: this.initializeBoard(this.state.boardSize, this.state.boardSizeSelection)
		});
	}

	fillCell(rowIdx, colIdx){
		if (this.state.running) {
			alert("Simulation is already running");
			return;
		} else if (this.state.locked) {
			alert("Board is locked, unlock to fill cell");
			return;
		}
		console.log("fillCell fired");
		//not sure if I should do it this way: make deep copy (may not be super smart when the board is very big...)
		let boardTemp = JSON.parse(JSON.stringify(this.state.board));
		boardTemp[rowIdx][colIdx] = !this.state.board[rowIdx][colIdx];
		this.setState({
			board: boardTemp
		});
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
					fillCell={this.fillCell}
					running={this.state.running}
					updateSpeed={this.state.simulationSpeedSelection[this.state.simulationSpeed]}
				/>

				<Control 
					running={this.state.running}
					locked={this.state.locked}
					startSimulation={this.startSimulation} 
					lockBoard={this.lockBoard} 
					resetBoard={this.resetBoard}
					setBoardSize={this.setBoardSize}
					setRunSpeed={this.setRunSpeed}
					boardSizeSelection={this.state.boardSizeSelection}
					simulationSpeedSelection={this.state.simulationSpeedSelection}
				/>
			</div>
		);
	}
}
export default App;
