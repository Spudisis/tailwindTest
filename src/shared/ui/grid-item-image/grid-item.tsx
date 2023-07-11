type Image = {
	src: { jpg: { image_url: string }; webp: { image_url: string } };
	title: string;
};

export const GridItemImage = ({ src, title }: Image) => {
	return (
		<picture>
			<source srcSet={src.webp.image_url} />
			<img className="object-cover h-60 min-w-full" src={src.jpg.image_url} alt={"image " + title} />
		</picture>
	);
};
