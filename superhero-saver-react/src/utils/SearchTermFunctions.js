export const DigestSearchTerm = (term) => {
	const groups = term.match(/([a-z0-9_-]*)=([a-z0-9_-]*)/gi);
	const searchTerm = groups
		.reduce((acc, group) => acc.replace(group, ""), term)
		.trim();
	const searchGroups = groups.reduce(
		(acc, group) => {
			const [key, value] = group.toLowerCase().split("=");
			console.log(group);
			acc[key] = value;
			return acc;
		},
		{ term: searchTerm }
	);

	console.log(">>", searchGroups);
	return searchGroups;
};
