type NameTitle = {
	title: string;
};
export const NameTitle = ({ title }: NameTitle) => {
	return <h3 className="text-2xl">{title}</h3>;
};
