import React, { Component } from "react";
import InputForm from "./InputForm";
import RecursionTree from "./Tree";
import { h } from "../Hirschberg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence1: "",
      sequence2: "",
      matchScore: 0,
      mismatchScore: 0,
      gapScore: 0,
      displayResult: false,
      treeData: {}
    };
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(inputObj) {
    inputObj["displayResult"] = true;
    console.log("submitInput inputObj: ", inputObj);

    var hResult = h(inputObj.sequence1, inputObj.sequence2);
    console.log("hResult: ", hResult);
    this.setState(inputObj);
    this.setState({ treeData: hResult[1] });
  }

  render() {
    console.log("state in main: ", this.state);
    console.log("displayResult: ", this.state.displayResult);
    // const text = this.state.displayResult ? 'output here' : null
    let tree = null;
    if (this.state.displayResult) {
      console.log("curr state: ", this.state);
      tree = <RecursionTree data={this.state.treeData} />;
    }

    return (
      <div>
        <InputForm submitInput={this.submitInput} />
        {tree}
      </div>
    );
  }
}
export default Main;
