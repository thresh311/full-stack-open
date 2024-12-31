import { useState } from "react";

const App = () => {
	const [people, setPeople] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newPerson, setNewPerson] = useState({ name: "", number: "" });
	const [nameFilter, setNameFilter] = useState("");
	const handleOnSumbmit = (e) => {
		e.preventDefault();
		if (people.some((p) => p.name === newPerson.name)) {
			alert(`${newPerson.name} is already added to phonebook`);
			return;
		}
		setPeople(
			people.concat({
				id: people.length + 1,
				name: newPerson.name,
				number: newPerson.number,
			})
		);
		setNewPerson({ name: "", number: "" });
	};
	const shownPeople = people.filter((p) =>
		p.name.toLowerCase().includes(nameFilter.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<label>
				Filter shown by name:{" "}
				<input
					value={nameFilter}
					onChange={(e) => setNameFilter(e.target.value)}
				/>
			</label>
			<h2>Add a New Person</h2>
			<form onSubmit={handleOnSumbmit}>
				<div>
					name:{" "}
					<input
						value={newPerson.name}
						onChange={(e) =>
							setNewPerson({ ...newPerson, name: e.target.value })
						}
					/>
				</div>
				<div>
					number:{" "}
					<input
						value={newPerson.number}
						onChange={(e) =>
							setNewPerson({ ...newPerson, number: e.target.value })
						}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{shownPeople.map((p) => (
				<p key={p.id}>
					{p.name} {p.number}
				</p>
			))}
		</div>
	);
};

export default App;
