import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sequence1: '',
			sequence2: '',
			matchScore: 0,
			mismatchScore: 0,
			gapScore: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleScoreChange = this.handleScoreChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		console.log('handleChange e.target, e.t.value: ', e.target.id, e.target.value);
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleScoreChange(keyValueObj) {
		console.log('handleScroeChange: ', keyValueObj);
		this.setState(keyValueObj);
	} 

	handleSubmit(e) {
		console.log('handleSubmit event: ', e);
		e.preventDefault();
		this.props.submitInput(this.state);
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="sequence1">
						<Form.Label>Sequence 1</Form.Label>
						<Form.Control onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="sequence2">
						<Form.Label>Sequence 2</Form.Label>
						<Form.Control onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="matchScore">
						<Form.Label>Match Score</Form.Label>
						<NumericInput value={this.state.matchScore} onChange={(value) => this.handleScoreChange({matchScore: value})}/>
					</Form.Group>
					<Form.Group controlId="mismatchScore">
						<Form.Label>Mismatch Score</Form.Label>
						<NumericInput value={this.state.mismatchScore} onChange={(value) => this.handleScoreChange({mismatchScore: value})}/>
					</Form.Group>
					<Form.Group controlId="gapScore">
						<Form.Label>Gap Score</Form.Label>
						<NumericInput value={this.state.gapScore} onChange={(value) => this.handleScoreChange({gapScore: value})}/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
  					</Button>
				</Form>
			</div>
		);
	}
}
export default InputForm;
