import React from "react";
import './App.css';
import './Home.css';
import Main from './components/Main';

function App() {
  const title = 'Hirschberg\'s Algorithm Visualization';
  return (
    <div className="App">
      <h2 className='title'>
        {title}
      </h2>
      <div className='title'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
