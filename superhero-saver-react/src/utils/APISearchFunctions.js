export async function FindHeroByID(id) {
	// the id must be a number.
	if (typeof id != "number") {
		return false;
	}

	// get the requested hero and return the JSON response.
	//"https://akabab.github.io/superhero-api/api/id/%d.json" % id
	const res = await fetch(
		`https://akabab.github.io/superhero-api/api/id/${id}.json`,
		{
			headers: {
				Accept: "application/json",
			},
		}
	);
	const json = await res.json();

	// digest and pass only what we need, when the nest.js server is complete graphQL will handle this instead.
	const { name, images, powerstats } = json;
	const data = {
		name,
		image: images.md,
		powerstats,
	};

	return data;
}
