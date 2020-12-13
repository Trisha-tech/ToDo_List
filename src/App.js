import React from 'react'
import './App.css';
import Header from './components/Header'
import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'
import {Provider} from './context'

function App() {
  return (
    <Provider>
    <div className="app-container">
  <Header></Header>
  <AddToDo></AddToDo>
  <ToDos></ToDos>
    </div>
    </Provider>
  );
}

export default App;
