import React from 'react'

// import AddTodo from '../containers/AddTodo'
// import { combineForms } from 'react-redux-form';

function Contact() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <button href="#" onClick={handleClick}>
     Contact
    </button>
  );
}

export default Contact