const Header = ({ name }) => {
	return (
		<>
			<h2>{name}</h2>
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
			<p>
				<b>Total of {total} exercises</b>
			</p>
		</>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default Course;
