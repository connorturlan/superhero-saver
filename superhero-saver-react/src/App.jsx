import { useState } from "react";
import "./App.css";
import SuperheroCard from "./components/SuperheroCard/SuperheroCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SuperheroList from "./components/SuperheroList/SuperheroList";

function App() {
	const [count, setCount] = useState(0);
	const [savedHeroes, setSavedHeroes] = useState([
		{ name: "alice" },
		{ name: "bob" },
	]);

	const handleSearch = (query) => {
		console.log("search", query);
	};

	return (
		<div className="App">
			<SearchBar placeholder="Superman" onSubmit={handleSearch} />
			<SuperheroCard />
			<SuperheroList data={savedHeroes} />
		</div>
	);
}

export default App;
