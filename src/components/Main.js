import React, { Component } from "react";
import InputForm from './InputForm';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sequence1: '',
			sequence2: '',
			matchScore: 0,
			mismatchScore: 0,
            gapScore: 0,
            displayResult: false,
		};
		this.submitInput = this.submitInput.bind(this);
	}

    submitInput(inputObj) {
        inputObj['displayResult'] = true;
        console.log('submitInput inputObj: ', inputObj);
        this.setState(inputObj);
    }

	render() {
        console.log('state in main: ', this.state);
        console.log('displayResult: ', this.state.displayResult);
        const text = this.state.displayResult ? 'output here' : null
		return (
			<div>
				<InputForm submitInput={this.submitInput}/>
                {text}
			</div>
		);
	}
}
export default Main;
