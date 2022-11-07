import styles from "./SuperheroList.module.scss";

function SuperheroList({ data }) {
	return (
		<div className={styles.superhero_list}>
			<h2>Saved Heroes</h2>
			<ul>
				{data.map((entry, index) => (
					<li key={index}>
						<h3>{entry.name}</h3>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SuperheroList;
