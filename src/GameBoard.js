import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Cell from "./Cell.js";
import "./GameBoard.css";

var keyValue = 0;
function getNewKey() {
    keyValue++;
    return keyValue;
}

class GameBoard extends Component{
    
    intervalId = 0;

    componentDidUpdate(){
        //utilize this method to 
        if(this.props.running){
            this.runSimulation();
        }else if(!this.props.running){
            this.stopSimulation();
        }


        
        //need way to stop interval
    }

    stopSimulation(){
        console.log("stopSimulation Fired");
        if(!this.intervalId === 0){
            clearInterval(this.intervalId);
        }
    }


    runSimulation(){
        console.log("successfully called run simulation");
        this.executeBoardUpdate();
        this.intervalId = setInterval(this.executeBoardUpdate, this.props.updateSpeed);
    }

    executeBoardUpdate(){
        console.log("executedBoardUpdate");
    }

    setRow(row, rowIdx){
        return (
            <tr key={getNewKey()}>
                {
                    row.map((val, colIdx) => 
                        <Cell key={getNewKey()} fillCell={this.props.fillCell} rowIdx={rowIdx} colIdx={colIdx} value={val}/>
                    )
                }
            </tr>
        );
    }

    componentDidMount(){
    }





    render(){
        let { board } = this.props;
        if (board === null){
            return null;
        }else{

            return (
                <div className="GameBoard">
                    <Table bordered>
                        <tbody>
                            {   
                                board.map((val, rowIdx) => 
                                    this.setRow(val, rowIdx)
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            );
        }        
    }
}


export default GameBoard;