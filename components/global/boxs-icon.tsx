type BoxsLogoProps = React.HTMLAttributes<SVGElement>;

export const BoxsIcon = (props: BoxsLogoProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 500 568"
			viewBox="0 0 500 568"
			{...props}
		>
			<path
				d="M250 264.46L477.59 132.23 432.76 106.18 250 212.37 67.24 106.18 22.41 132.23z"
				fill="currentColor"
			></path>
			<path
				d="M250 159.27L387.07 79.64 342.24 53.59 250 107.18 157.76 53.59 112.93 79.64z"
				fill="currentColor"
			></path>
			<path
				d="M205.17 26.04L250 52.09 294.83 26.04 250 0z"
				fill="currentColor"
			></path>
			<path
				d="M271.85 304.52l.52 263.48L500 435.75V173.18L271.85 304.52zm183.89 0l-92.35 53.57v52.13l92.35-54.75v54.75L318.26 489.8V330.66l137.48-81.01v54.87z"
				fill="currentColor"
			></path>
			<path
				d="M0 172.75L0 435.75 43.57 461.06 43.57 249.65 90.26 277.87 90.26 488.19 135.91 514.72 135.91 302.69 181.35 329.61 181.35 541.12 181.35 541.12 226.62 567.42 227.15 303.52z"
				fill="currentColor"
			></path>
		</svg>
	);
};
