test("Search mechanism basic usage (receive empty string)", async () => {
	const response = await fetch("http://localhost:3000/api/v1/search", {
		method: "POST",
		body: JSON.stringify({}),
	});

	expect(response.status).toBe(400);
});

test("Search mechanism basic usage (receive ' ' string)", async () => {
	const response = await fetch("http://localhost:3000/api/v1/search", {
		method: "POST",
		body: JSON.stringify({ searchString: "" }),
	});

	expect(response.status).toBe(500);
});

test("Search mechanism basic usage (receive complete string)", async () => {
	const response = await fetch("http://localhost:3000/api/v1/search", {
		method: "POST",
		body: JSON.stringify({
			searchString: "machine learning#iot%impact assessment#cummlative impacts",
		}),
	});
	const responseBody = await response.json();

	expect(typeof responseBody.page).toBe("number");
	expect(typeof responseBody.results).toBe("object");
});
