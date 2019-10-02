import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Control extends Component {
    
    resetBoard(){
        alert("Control::resetBoard fired");
        //callback method to App class method
        this.props.resetBoard();
    }
    
    render() {
        return (
            <Button onClick={() => this.resetBoard()}>
                Reset Board
            </Button>
        );
    }
}

export default Control;