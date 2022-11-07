import { useState } from "react";
import "./App.css";
import SuperheroCard from "./components/SuperheroCard/SuperheroCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SuperheroList from "./components/SuperheroList/SuperheroList";
import { FindHeroByID } from "./utils/APISearchFunctions";

function App() {
	const [count, setCount] = useState(0);
	const [currentHero, setCurrentHero] = useState({
		name: "Superhero",
		image: "",
		powerstats: {},
	});
	const [savedHeroes, setSavedHeroes] = useState([
		{ name: "alice" },
		{ name: "bob" },
	]);

	const handleSearch = async (query) => {
		console.log("search", query);

		// at present, we only search by ID.
		const heroId = parseInt(query);
		const data = await FindHeroByID(heroId);

		// update the hero card.
		setCurrentHero(data);

		console.log(data);
	};

	const handleHeroUpdate = (data) => {
		return false;
	};

	const handleHeroSave = () => {
		setSavedHeroes([...savedHeroes, currentHero]);
		console.log("added saved hero,", currentHero.name);
	};

	return (
		<div className="App">
			<SearchBar placeholder="Superman" onSubmit={handleSearch} />
			<SuperheroCard data={currentHero} onSave={handleHeroSave} />
			<SuperheroList data={savedHeroes} />
		</div>
	);
}

export default App;
