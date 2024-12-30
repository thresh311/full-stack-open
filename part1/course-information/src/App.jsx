import { useState } from "react";
import viteLogo from "/vite.svg";

const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	);
};

const Content = (props) => {
	const { part1, part2, part3 } = props;
	return (
		<>
			<Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
		</>
	);
};

const Part = (props) => {
	return (
		<>
			<p>
				{props.name} {props.exercises}
			</p>
		</>
	);
};

const Total = (props) => {
	let total = 0;
	props.exercises.forEach((e) => (total += e));
	return (
		<>
			<p>Number of exercises {total}</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				part1={{ name: part1, exercises: exercises1 }}
				part2={{ name: part2, exercises: exercises2 }}
				part3={{ name: part3, exercises: exercises3 }}
			/>
			<Total exercises={[exercises1, exercises2, exercises3]} />
		</div>
	);
};

export default App;
