import style from './IconButton.module.css';

const COLORS = {
	black: {
		normal: style.black,
		filled: style.black__filled,
	},
	red: {
		normal: style.red,
		filled: style.red__filled,
	},
};

const IconButton = ({ kind, filled, icon: Icon, className, ...props }) => {
	const clasNames = COLORS[kind];
	const clasNameKey = filled ? 'filled' : 'normal';
	const classN = clasNames[clasNameKey];
	return (
		<button {...props} className={`${style.button} ${classN} ${className}`}>
			<Icon className={style.button__icon} />
		</button>
	);
};

export default IconButton;
