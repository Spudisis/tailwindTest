import React from "react";
import { useOnClickOutside } from "usehooks-ts";

type CustomSelect = {
	options: { label: string; value: string }[];
	defaultValue: string;
	onChange: (e: string) => void;
	nameSelect: string;
};

export const CustomSelect = ({ options, nameSelect, defaultValue, onChange }: CustomSelect) => {
	const [statusOpen, setStatusOpen] = React.useState(false);
	const refSelect = React.useRef(null);

	const closeModal = () => {
		setStatusOpen(false);
	};

	useOnClickOutside(refSelect, closeModal);
	return (
		<div ref={refSelect} x-data="select" className="relative w-32" onClick={() => setStatusOpen(!statusOpen)}>
			<button className="flex w-32 items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300">
				<span>
					{nameSelect}: {options.find((option) => option.value === defaultValue)?.label}
				</span>
			</button>
			{statusOpen && (
				<ul className="z-2 absolute mt-1 w-32 rounded bg-gray-50 ring-1 ring-gray-300" x-show="open">
					{options &&
						options.map((option) => (
							<li
								key={option.value}
								className="cursor-pointer select-none p-2 hover:bg-gray-200"
								onClick={() => onChange(option.value)}
							>
								{option.label}
							</li>
						))}
				</ul>
			)}
		</div>
	);
};
