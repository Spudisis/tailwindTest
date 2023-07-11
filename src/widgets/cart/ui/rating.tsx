type Rating = {
	rating: number;
};

export const Rating = ({ rating }: Rating) => {
	return <>{rating && <div className="text-orange-400 text-xl">★{rating}</div>}</>;
};
