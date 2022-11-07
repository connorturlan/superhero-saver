async function FindHeroByID(id) {
	// the id must be a number.
	if (typeof id != "number") {
		return false;
	}

	// get the requested hero and return the JSON response.
	const res = await fetch(
		"https://akabab.github.io/superhero-api/api/id/%d.json" % id
	);
	return await res.json();
}
