import React, {Component} from 'react';
import "./Cell.css";

var keyValue = 0;
function getNewKey() {
    keyValue++;
    return keyValue;
}

class Cell extends Component{
    render(){
        let {value, rowIdx, colIdx} = this.props;
        return (
            value 
                ? <td onClick={() => this.props.fillCell(rowIdx, colIdx)} key={getNewKey()} className="FilledCell" ></td>
                : <td onClick={() => this.props.fillCell(rowIdx, colIdx)} key={getNewKey()} className="EmptyCell" ></td>
        );  
    }
}



export default Cell;