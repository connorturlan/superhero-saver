import styles from "./SuperheroCard.module.scss";

function SuperheroCard({ data, onSave }) {
	// unpack the data.
	const { name, image, powerstats } = data || {
		name: "Superhero",
		image: "",
		powerstats: {},
	};

	// create a list containing all the power stats for the hero.
	// {`${stat}: ${powerstats[stat]}`}
	const statList =
		powerstats &&
		Object.keys(powerstats).map((stat) => (
			<li key={`${name} ${stat}`}>
				{`${stat}:`}
				<input
					type="range"
					defaultValue={powerstats[stat]}
					onInput={(e) =>
						(e.target.nextElementSibling.value = e.target.value)
					}
				/>
				<output>{`${powerstats[stat]}`}</output>
			</li>
		));

	const handleChanges = (event) => {};

	const handleSave = (event) => {
		event.preventDefault();
		onSave();
	};

	// a card presenting all the hero's stats.
	return (
		<div className={styles.card_body}>
			<h2>{name}</h2>
			<img src={image}></img>

			<h3>Power Stats</h3>
			<ul className={styles.card_list}>{statList}</ul>

			<input type="submit" value="Save Changes" />
			<input type="submit" value="Add to Saved" onClick={handleSave} />
		</div>
	);
}

export default SuperheroCard;
