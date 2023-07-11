import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";

type Sort = {
	onChange: (n: string) => void;
	value: string;
};

export const Sort = observer(({ onChange, value }: Sort) => {
	const { asc } = useParams();

	React.useEffect(() => {
		if (asc && value !== asc) onChange(asc);
	}, [asc]);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		onChange(value);
	};

	return (
		<select value={value} onChange={handleChange}>
			<option value="asc">asc</option>
			<option value="desc">desc</option>
		</select>
	);
});
