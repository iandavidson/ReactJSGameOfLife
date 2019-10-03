import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class Control extends Component {
    
    resetButton(){
        alert("Control::resetButton fired");
        //callback method to App class method
        this.props.resetBoard();
    }
    
    startButton(){
        alert("Control::startButton fired");
        this.props.startSimulation();
    }

    lockButton(){
        alert("Control::lockButton fired");
        this.props.lockBoard();
    }

    render() {
        let { boardSizeSelection } = this.props;
        return (
            <div>
                <Button onClick={() => this.resetButton()}>
                    Reset Board
                </Button>
                <Button onClick={() => this.startButton()}>
                    Start Simulation
                </Button>
                <Button onClick={() => this.lockButton()}>
                    Lock Board
                </Button>
                <DropdownButton id="BoardSizeDropDown" title="Select Size">
                    {
                        boardSizeSelection.map((val, idx) => 
                            <Dropdown.Item onClick={() => this.props.setBoardSize(idx)}>{val}</Dropdown.Item>
                        )
                    }
                    
                </DropdownButton>
            </div>
        );
    }
}

export default Control;