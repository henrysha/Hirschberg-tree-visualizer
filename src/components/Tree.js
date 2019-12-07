import React from "react";
import Tree from "react-d3-tree";
import "./Tree.css";

let initialPosition = { x: 512, y: 50 };
function RecursionTree(props) {
  return (
    <div className="TreeWrapper">
      <Tree
        data={props.data}
        orientation="vertical"
        translate={initialPosition}
      />
    </div>
  );
}

export default RecursionTree;
