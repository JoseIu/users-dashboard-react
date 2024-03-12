import style from './Button.module.css';

const BUTTON__COLORS = {
	primary: style.primary,
	secondary: style.secondary,
};

const Button = ({ kind = 'primary', className, ...props }) => (
	<button
		{...props}
		className={`${style.button} ${BUTTON__COLORS[kind]} ${className}`}
	></button>
);

export default Button;
