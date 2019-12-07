import React, { Component } from "react";
import InputForm from "./InputForm";
import RecursionTree from "./Tree";
import { h } from "../Hirschberg";
import "./Main.css";

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
      treeData: {},
      alignment: ""
    };
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(inputObj) {
    inputObj["displayResult"] = true;
    console.log("submitInput inputObj: ", inputObj);

    var hResult = h(inputObj.sequence1, inputObj.sequence2);
    console.log("hResult: ", hResult);
    this.setState(inputObj);
    this.setState({
      treeData: hResult[1],
      alignment: hResult[0]
    });
  }

  render() {
    console.log("state in main: ", this.state);
    console.log("displayResult: ", this.state.displayResult);
    const text = this.state.alignment;
    let tree = null;
    let alignment_header = "";
    let alignment = null;
    if (this.state.displayResult) {
      console.log("curr state: ", this.state);
      tree = <RecursionTree data={this.state.treeData} />;
      alignment_header = "alignment";
      alignment = (
        <div className="alignment">
          <span>{alignment_header}</span>
          {text.split("\n").map((i, key) => {
            return (
              <div>
                <code key={key}>{i}</code>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <InputForm submitInput={this.submitInput} />
        {alignment}
        {tree}
      </div>
    );
  }
}
export default Main;
