type Image = {
	src: { jpg: { image_url: string }; webp: { image_url: string } };
	title: string;
};

export const GridItemImage = ({ src, title }: Image) => {
	return (
		<picture>
			<source srcSet={src.webp.image_url} />
			<img className="h-60 min-w-full object-cover" src={src.jpg.image_url} alt={"image " + title} />
		</picture>
	);
};
