import axios from "axios";
import { useEffect, useState } from "react";
import peopleService from "./services/PeopleService";

const Filter = ({ nameFilter, setNameFilter }) => {
	return (
		<label>
			Filter people shown by name:{" "}
			<input
				value={nameFilter}
				onChange={(e) => setNameFilter(e.target.value)}
			/>
		</label>
	);
};

const AddPersonForm = ({ handleOnSumbmit, newPerson, setNewPerson }) => {
	return (
		<form onSubmit={handleOnSumbmit}>
			<div>
				name:{" "}
				<input
					value={newPerson.name}
					onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
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
	);
};

const People = ({ people, onDelete }) => {
	return (
		<>
			{people.map((p) => (
				<Person key={p.id} person={p} onDelete={onDelete} />
			))}
		</>
	);
};

const Person = ({ person, onDelete }) => {
	return (
		<p>
			{person.name} {person.number}{" "}
			<button onClick={() => onDelete(person)}>Delete</button>
		</p>
	);
};

const App = () => {
	const [people, setPeople] = useState([]);
	const [newPerson, setNewPerson] = useState({ name: "", number: "" });
	const [nameFilter, setNameFilter] = useState("");

	useEffect(() => {
		peopleService
			.getAll()
			.then((data) => setPeople(data))
			.catch((error) => {
				console.log(error);
				alert(
					"There was an error while fetching the registered people from server."
				);
			});
	}, []);

	const handleOnSumbmit = (e) => {
		e.preventDefault();
		if (people.some((p) => p.name === newPerson.name)) {
			alert(`${newPerson.name} is already added to phonebook`);
			return;
		}
		peopleService
			.create(newPerson)
			.then((data) => {
				console.log(data);
				setPeople(people.concat(data));
				setNewPerson({ name: "", number: "" });
			})
			.catch((err) => {
				console.log(err);
				alert(
					"There was an error while creating the new person in the server."
				);
			});
	};

	const handleDelete = (personToDelete) => {
		if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      peopleService.deletePerson(personToDelete.id).then((deletedPerson) => {
        setPeople(people.filter((p) => p.id !== deletedPerson.id));
      });
		}
	};

	const shownPeople = people.filter((p) =>
		p.name.toLowerCase().includes(nameFilter.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter {...{ nameFilter, setNameFilter }} />
			<h2>Add a New Person</h2>
			<AddPersonForm {...{ handleOnSumbmit, newPerson, setNewPerson }} />
			<h2>Numbers</h2>
			<People people={shownPeople} onDelete={handleDelete} />
		</div>
	);
};

export default App;
