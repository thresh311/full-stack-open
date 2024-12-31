import { useState } from "react";
import viteLogo from "/vite.svg";

const Header = ({ name }) => {
	return (
		<>
			<h1>{name}</h1>
		</>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((p) => {
				return <Part key={p.id} part={p} />;
			})}
		</div>
	);
};

const Part = ({ part }) => {
	return (
		<>
			<p>
				{part.name} {part.exercises}
			</p>
		</>
	);
};

const Total = ({ parts }) => {
	const total = parts.reduce((previousTotal, currentPart) => {
		return previousTotal + currentPart.exercises;
	}, 0);
	return (
		<>
			<p><b>Total of {total} exercises</b></p>
		</>
	);
};

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
			{
				name: "Crazyness",
				exercises: 14,
				id: 4,
			},
		],
	};

	return (
		<div>
			<Course course={course} />
			<Total parts={course.parts} />
		</div>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
		</div>
	);
};

export default App;
