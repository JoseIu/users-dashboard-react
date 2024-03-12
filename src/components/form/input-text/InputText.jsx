import style from './InputText.module.css';

const InputText = ({ label, error, className, ...props }) => (
	<label className={`${style.container}${className}`}>
		<span className={style.label}>{label} </span>
		<input
			className={`${style.input} ${error ? style.inputerror : ''}`}
			{...props}
			type='text'
		/>
		<span className={style.error}>{error} </span>
	</label>
);

export default InputText;
