import styles from "./SuperheroCard.module.scss";

function SuperheroCard(props) {
	return (
		<div className={styles.card_body}>
			<h2>Superhero</h2>
			<img></img>
			<h3>Power Stats</h3>
			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
}

export default SuperheroCard;
