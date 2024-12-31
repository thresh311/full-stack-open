import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "123-2456" },
	]);
	const [newPerson, setNewPerson] = useState({ name: "", number: "" });
	const handleOnSumbmit = (e) => {
		e.preventDefault();
		if (persons.some((p) => p.name === newPerson.name)) {
			alert(`${newPerson.name} is already added to phonebook`);
			return;
		}
		setPersons(persons.concat(newPerson));
		setNewPerson({ name: "", number: "" });
	};

	return (
		<div>
			<h2>Phonebook</h2>
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
			{persons.map((p) => (
				<p key={p.name}>
					{p.name} {p.number}
				</p>
			))}
		</div>
	);
};

export default App;
