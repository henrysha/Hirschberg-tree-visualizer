import React from "react";
import Tree from "react-d3-tree";
import "./Tree.css";

function RecursionTree(props) {
  return (
    <div class="TreeWrapper">
      <Tree data={props.data} />
    </div>
  );
}

export default RecursionTree;
