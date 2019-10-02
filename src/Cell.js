import React, {Component} from 'react';
import "./Cell.css";

class Cell extends Component{
    render(){
        let {value, rowIdx, colIdx} = this.props;
        let keyVal = rowIdx * colIdx;
        return (
            value 
                ? <td key={keyVal} className="FilledCell"></td>
                : <td key={keyVal} className="EmptyCell"></td>
        );  
    }
}



export default Cell;