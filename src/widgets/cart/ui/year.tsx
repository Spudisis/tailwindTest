type Year = {
	year: number | null;
};

export const Year = ({ year }: Year) => {
	return <>{year && <div className="text-xl">Year: {year}</div>}</>;
};
