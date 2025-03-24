import Adcard from "./AdCard";
import type { AdCardProps } from "./AdCard";

const ads: AdCardProps[] = [
	{
		imgUrl: "/img/img1.webp",
		link: "/ads/bougie",
		title: "Bougie",
		price: 10,
	},
	{
		imgUrl: "/img/img2.webp",
		link: "/ads/vase",
		title: "Dame-Jeanne",
		price: 20,
	},
	{
		imgUrl: "/img/img3.webp",
		link: "/ads/porte",
		title: "Porte-magazine",
		price: 30,
	},
	{
		imgUrl: "/img/img4.webp",
		link: "/ads/table",
		title: "Table",
		price: 50,
	},
	{
		imgUrl: "/img/img5.webp",
		link: "/ads/meuble",
		title: "Vaisselier",
		price: 70,
	},
	{
		imgUrl: "/img/img6.webp",
		link: "/ads/bottes",
		title: "Vide-poche",
		price: 30,
	},
];

function RecentAds() {
	return (
		<>
			<h2>Annonces récentes</h2>
			<section className="recent-ads">
				{ads.map((ad) => (
					<Adcard
						key={ad.title}
						imgUrl={ad.imgUrl}
						link={ad.link}
						title={ad.title}
						price={ad.price}
					/>
				))}
			</section>
		</>
	);
}

export default RecentAds;
