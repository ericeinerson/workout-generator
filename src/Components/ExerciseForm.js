import React from 'react'
import "./ExerciseForm.css"

function ExerciseForm() {
  return (
    <>
      <div className="exercise-input">
        <form id="new-exercises">
          <h3>Add New Exercise</h3>
          <label htmlFor="exercise">Exercise: </label>
          <br />
          <input type="text" name="exercise" id="new-exercise-text" />
          <br />
          <label htmlFor="sets">Sets: </label>
          <br />
          <input type="text" name="sets" id="new-exercise-sets" />
          <br />
          <label htmlFor="reps">Reps: </label>
          <br />
          <input type="text" name="reps" id="new-exercise-reps" />
          <br />
          <input type="submit" id="submit-button" />
        </form>
      </div>
    </>
  )
}

export default ExerciseForm