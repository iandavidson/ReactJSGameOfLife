import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Control.css";

class Control extends Component {
    
    resetButton(){
        // alert("Control::resetButton fired");
        //callback method to App class method
        this.props.resetBoard();
    }
    
    startButton(){
        // alert("Control::startButton fired");
        this.props.startSimulation();
    }

    lockButton(){
        // alert("Control::lockButton fired");
        this.props.lockBoard();
    }

    getStartButtonValue(){
        return !this.props.running ? "Start Simulation" : "End Simulation";
    }

    getLockButtonValue(){
        return this.props.locked ? "Unlock" : "Lock";
    }

    render() {
        let { boardSizeSelection, simulationSpeedSelection } = this.props;
        return (
            <div className="ControlPanel">
                <Button onClick={() => this.resetButton()}>
                    Reset Board
                </Button>
                
                
                    
                <Button onClick={() => this.startButton()}>
                    {   
                        this.getStartButtonValue()
                    }
                </Button>
                <Button onClick={() => this.lockButton()}>
                    {
                        this.getLockButtonValue()
                    }
                </Button>
                <div className="row justify-content-md-center ControlDropdowns">
                    <DropdownButton className="SettingDropDown" id="BoardSizeDropDown" title="Select Size">
                        {
                            boardSizeSelection.map((val, idx) =>
                                <Dropdown.Item onClick={() => this.props.setBoardSize(idx)}>{val}</Dropdown.Item>
                            )
                        }
                    </DropdownButton>
                    <DropdownButton className="SettingDropDown" id="UpdateRateDropDown" title="Select Speed">
                        {
                            simulationSpeedSelection.map((val, idx) =>
                                <Dropdown.Item onClick={() => this.props.setRunSpeed(idx)}>{val}</Dropdown.Item>
                            )
                        }
                    </DropdownButton>
                </div>
            </div>
        );
    }
}

export default Control;