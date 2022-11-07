import { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar({ placeholder, onSubmit }) {
	const [searchTerm, setSearchTerm] = useState("");

	const updateSearchTerm = (event) => {
		event.preventDefault();
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchTerm);
		onSubmit(searchTerm);
	};

	return (
		<div className={styles.searchbar}>
			<input
				type="text"
				className={styles.searchbar_input}
				placeholder={placeholder}
				onChange={updateSearchTerm}
			></input>
			<input
				type="submit"
				className={styles.searchbar_submit}
				value="Search"
				onClick={handleSubmit}
			/>
		</div>
	);
}

export default SearchBar;
