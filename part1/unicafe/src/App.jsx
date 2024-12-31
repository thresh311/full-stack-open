import { useState } from "react";

const Statistics = ({ feedback }) => {
	const { good, bad, neutral } = feedback;
	const totalFeedback = good + bad + neutral;
	const average = (good - bad) / totalFeedback;
	const percentagePositive = (good / totalFeedback) * 100;

	if (totalFeedback === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="total" value={totalFeedback} />
			<StatisticLine text="average" value={average} />
			<StatisticLine text="positive" value={percentagePositive + "%"} />
		</>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const constructHandler = (value, setValue) => () => {
		setValue(value + 1);
	};

	return (
		<div>
			<h1>Give feedback!</h1>
      <Button onClick={constructHandler(good, setGood)} text="good"/>
      <Button onClick={constructHandler(bad, setBad)} text="bad"/>
      <Button onClick={constructHandler(neutral, setNeutral)} text="neutral"/>
			<h1>Statistics</h1>
			<Statistics feedback={{ good, bad, neutral }} />
		</div>
	);
};

export default App;
