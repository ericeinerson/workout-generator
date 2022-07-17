import React from "react";
import ExerciseTable from "./Components/ExerciseTable"
import ExerciseForm from "./Components/ExerciseForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <ExerciseTable />   
      <ExerciseForm /> 
    </div>
  );
}

export default App;
