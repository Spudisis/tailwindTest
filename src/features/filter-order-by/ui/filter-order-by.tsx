import { observer } from "mobx-react";
import React from "react";

type FilterOrderBy = {
	orderByList: { value: string; label: string }[];
	value: string;
	changeValue: (s: string) => void;
};

export const FilterOrderBy = observer(({ orderByList, value, changeValue }: FilterOrderBy) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		changeValue(value);
	};
	return (
		<select value={value} onChange={handleChange}>
			{orderByList.map((order, index) => (
				<option value={order.value} key={index}>
					{order.label}
				</option>
			))}
		</select>
	);
});
