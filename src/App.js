import React from "react";
import './App.css';
import './Home.css';
import Main from './components/Main';

function App() {
  const title = 'Hirschberg\'s Algorithm Visualization';
  const description = 'Hirschberg\'s algorithm is a dynamic programming algorithm that finds the optimal sequence alignment between two strings. Hirschberg modifies global alignment (Needleman–Wunsch algorithm) to using only linear space. Hirschberg uses a divide and conquer approach to partition each problem into two smaller subproblems. Hirschberg is based on the observation that to compute the optimal alignment score, we only need to store the current and previous row of the dynamic programming score matrix of Needleman-Wunsch. ';
  return (
    <div className="App">
      <h2 className='title'>
        {title}
      </h2>
      <h1 className='description'>
        {description}
      </h1>
      <div className='title'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
