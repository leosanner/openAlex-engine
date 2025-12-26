export async function GET(request: Request) {
	const obj = {
		projectName: "OpenAlex search engine",
		projectGithub: "https://github.com/leosanner/openAlex-engine",
		availableRoutes: ["search", "trends", "summary"],
	};
	return new Response(JSON.stringify(obj), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
