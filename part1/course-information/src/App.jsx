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
	const [part1, part2, part3] = props.parts;
	return (
		<div>
			<Part part={part1} />
			<Part part={part2} />
			<Part part={part3} />
		</div>
	);
};

const Part = (props) => {
  const {part} = props;
	return (
		<>
			<p>
				{part.name} {part.exercises}
			</p>
		</>
	);
};

const Total = (props) => {
	let total = 0;
	props.parts.forEach((p) => (total += p.exercises));
	return (
		<>
			<p>Number of exercises {total}</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
