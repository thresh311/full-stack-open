import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");
	const handleOnSumbmit = (e) => {
		e.preventDefault();
		if (persons.some((p) => p.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		setPersons(persons.concat({ name: newName }));
		setNewName("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleOnSumbmit}>
				<div>
					name:{" "}
					<input value={newName} onChange={(e) => setNewName(e.target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((p) => (
				<p key={p.name}>{p.name}</p>
			))}
		</div>
	);
};

export default App;
