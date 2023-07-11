import React from "react";
import { CustomSelect } from "shared/ui/custom-select/custom-select";

type Type = {
	types: { label: string; value: string }[];
	activeType: string;
	changeActiveType: (s: string) => void;
};

export const TypeFilter = React.memo(({ types, activeType, changeActiveType }: Type) => {
	const handleChange = (value: string) => {
		changeActiveType(value);
	};
	return <CustomSelect nameSelect="Type" onChange={handleChange} defaultValue={activeType} options={types} />;
});
