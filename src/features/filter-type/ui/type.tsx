import React from "react";

type Type<T> = {
	types: { label: string; value: T }[];
	activeType: string;
	changeActiveType: (s: string) => void;
};

export const TypeFilter = React.memo(<T,>({ types, activeType, changeActiveType }: Type<T>) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		changeActiveType(value);
	};
	return (
		<div>
			<select value={activeType} onChange={handleChange}>
				{types.map((type, index) => (
					<option value={String(type.value)} key={index}>
						{type.label}
					</option>
				))}
			</select>
		</div>
	);
});
