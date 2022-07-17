import React, { useEffect, useState } from 'react'
import "./ExerciseTable.css"
import Workout from "./Workout"


function ExerciseTable() {
  const BASE_URL = "http://localhost:8000/workouts"
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((r) => r.json())
      .then((data) => setWorkouts(data))
  }, [])

  return (
    <>
      <header>
        <nav>
          <ul className="nav_links">Fitness Programming</ul>
        </nav>
      </header>
      <div id="center">
        <div className=""></div>
        <div>
          <h4>Select Your Workout Split</h4>
          {/*the buttons for each exercise*/}
          <button id="Legs">Legs</button>
          <button id="Push">Push</button>
          <button id="Pull">Pull</button>
          <button id="Core">Core</button>
          <button id="Cardio">Cardio</button>
        </div>
      </div>
      <br />
      <div id="workout-results"></div>
      <h2>Exercise Table</h2>
      <ul>
        {workouts.map((workout) => (
          <Workout key={workout.id} workout={workout} />
        ))}
      </ul>
    </>
  )
}

export default ExerciseTable;