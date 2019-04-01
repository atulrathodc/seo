import React from 'react'

// import AddTodo from '../containers/AddTodo'
// import { combineForms } from 'react-redux-form';

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <button href="#" onClick={handleClick}>
      Click here
    </button>
  );
}

export default App