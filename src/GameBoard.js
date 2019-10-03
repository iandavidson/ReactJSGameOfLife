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
    
    setRow(row, rowIdx){
        return (
            <tr key={getNewKey()}>
                {
                    row.map((val, colIdx) => 
                        <Cell rowIdx={rowIdx} colIdx={colIdx} value={val}/>
                    )
                }
            </tr>
        );
    }

    render(){
        let { board } = this.props;
        if (board === null){
            return null;
        }else{

            return (
                <Table className="GameBoard" bordered>
                    <tbody>
                        {   
                            board.map((val, rowIdx) => 
                                this.setRow(val, rowIdx)
                            )
                        }
                    </tbody>
                </Table>
            );
        }        
    }
}


export default GameBoard;