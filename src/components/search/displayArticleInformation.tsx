import { OpenAlexArticle } from "@/schemas/openAlex";

type DisplayArticleInformationType = {
	articleObj: OpenAlexArticle;
};

export function DisplayArticleInformation({
	articleObj,
}: DisplayArticleInformationType) {
	return (
		<div className="flex flex-col my-5">
			<p>
				<b>Title: </b>
				{articleObj.title}
			</p>
			<p>
				<b>FWCI: </b> {articleObj.fwci}
			</p>
		</div>
	);
}
