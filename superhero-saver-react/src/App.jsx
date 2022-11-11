import { useState } from "react";
import styles from "./App.module.scss";
import SuperheroCard from "./components/SuperheroCard/SuperheroCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SuperheroList from "./components/SuperheroList/SuperheroList";
import { FindHeroByID } from "./utils/APISearchFunctions";
import { DigestSearchTerm } from "./utils/SearchTermFunctions";

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

		const searchQuery = DigestSearchTerm(query);

		// at present, we only search by ID.
		const heroId = parseInt(searchQuery.id);
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
		<div className={styles.app}>
			<div className={styles.sidebar}>
				<SuperheroList data={savedHeroes} />
			</div>
			<div className={styles.main}>
				<SearchBar placeholder="Superman" onSubmit={handleSearch} />
				<SuperheroCard data={currentHero} onSave={handleHeroSave} />
			</div>
		</div>
	);
}

export default App;
