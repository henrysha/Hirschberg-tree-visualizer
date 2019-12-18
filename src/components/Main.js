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
      alignment: "",
      alignmentObj: {},
    };
    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(inputObj) {
    inputObj["displayResult"] = true;
    console.log("submitInput inputObj: ", inputObj);

    var short = inputObj.sequence1;
    var long = inputObj.sequence2;
    if (inputObj.sequence1.length > inputObj.sequence2.length) {
      short = inputObj.sequence2;
      long = inputObj.sequence1;
    }

    var hResult = h(short, long, inputObj.matchScore, inputObj.mismatchScore, inputObj.gapScore);
    //this.setState(inputObj);
    this.setState({
      displayResult: true,
      treeData: hResult[1],
      alignment: hResult[0],
      alignmentObj: hResult[2],
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
      const alignmentObj = this.state.alignmentObj;
      const middle = alignmentObj.alignment;
      var new_middle = "";
      for (var i = 0; i < middle.length; i++) {
        if (middle[i] === '=') {
          new_middle += '\xa0';
        } else {
          new_middle += middle[i];
        }
      }
      alignment = (
        <div className="alignment">
          <span>{alignment_header}</span>
          <div>
            <code key={"string1"}>{alignmentObj.string1}</code>
          </div>
          <div>
            <code key={"alignment"}>{new_middle}</code>
          </div>
          <div>
            <code key={"string2"}>{alignmentObj.string2}</code>
          </div>
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
