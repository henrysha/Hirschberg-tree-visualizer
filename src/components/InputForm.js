import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import './InputForm.css';

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
			<div className='inputForm'>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group as={Row} controlId="sequence1">
						<Form.Label column sm={3}>Sequence 1</Form.Label>
						<Col sm={9}>
							<Form.Control size='sm' onChange={this.handleChange} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="sequence2">
						<Form.Label column sm={3}>Sequence 2</Form.Label>
						<Col sm={9}>
							<Form.Control size='sm' onChange={this.handleChange} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="matchScore">
						<Form.Label className='numericLabel' column sm={3}>Match Score</Form.Label>
						<Col sm={4}>
							<NumericInput value={this.state.matchScore} onChange={(value) => this.handleScoreChange({ matchScore: value })} />
						</Col>
					</Form.Group> 
					<Form.Group as={Row} controlId="mismatchScore">
						<Form.Label className='numericLabel' column sm={3}>Mismatch Score</Form.Label>
						<Col sm={4}>
							<NumericInput value={this.state.mismatchScore} onChange={(value) => this.handleScoreChange({ mismatchScore: value })} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="gapScore">
						<Form.Label className='numericLabel' column sm={3}>Gap Score</Form.Label>
						<Col sm={4}>
							<NumericInput value={this.state.gapScore} onChange={(value) => this.handleScoreChange({ gapScore: value })} />
						</Col>
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
