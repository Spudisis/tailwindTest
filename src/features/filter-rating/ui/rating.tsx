import { CustomSelect } from "shared/ui/custom-select/custom-select";

type RatingFilter = {
	onChange: (n: string) => void;
	value: string;
	ratingList: { value: string; label: string }[];
};

export const RatingFilter = ({ ratingList, onChange, value }: RatingFilter) => {
	const handleChange = (value: string) => {
		onChange(value);
	};
	return <CustomSelect nameSelect="Rating" options={ratingList} onChange={handleChange} defaultValue={value} />;
};
