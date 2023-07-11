import { observer } from "mobx-react";
import { CustomSelect } from "shared/ui/custom-select/custom-select";

type FilterOrderBy = {
	orderByList: { value: string; label: string }[];
	value: string;
	changeValue: (s: string) => void;
};

export const FilterOrderBy = observer(({ orderByList, value, changeValue }: FilterOrderBy) => {
	const handleChange = (value: string) => {
		changeValue(value);
	};
	return <CustomSelect nameSelect="Order" onChange={handleChange} defaultValue={value} options={orderByList} />;
});
