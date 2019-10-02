import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Cell from "./Cell.js";







class GameBoard extends Component{
    
    setRow(row, rowIdx){
        return (
            <tr key={rowIdx}>
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
        return (
            <Table bordered>
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

// <tr>
//     <td>Table cell</td>
// </tr>

export default GameBoard;