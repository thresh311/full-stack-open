import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + bad + neutral;
  const average = (good - bad) / totalFeedback;
  const percentagePositive = good / totalFeedback * 100;

  const constructHandler = (value, setValue) => () => {setValue(value + 1)}

  return (
    <div>
      <h1>Give feedback!</h1>
      <button onClick={constructHandler(good, setGood)}>good</button>
      <button onClick={constructHandler(bad, setBad)}>bad</button>
      <button onClick={constructHandler(neutral, setNeutral)}>neutral</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {totalFeedback}</p>
      <p>Average {average}</p>
      <p>Total {percentagePositive}%</p>
    </div>
  )
}

export default App