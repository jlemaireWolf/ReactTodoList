import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
/*** importer le composant Todolist ***/
import TodoList from './todo/TodoList'

function App() {
  return (
   <TodoList/>
  );
}

export default App;
