import React from 'react'

function Workout({workout:{exercises, sets, reps}}) {
  return (
    <li>
        {exercises}
    </li>
  )
}

export default Workout