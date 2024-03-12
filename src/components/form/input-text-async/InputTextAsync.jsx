import CheckCircleIcon from '../../icons/CheckCircleIcon';
import CrossCircleIcon from '../../icons/CrossCircleICon';
import UpdateIcon from '../../icons/UpdateIcon';
import style from './InputTextAsync.module.css';

const InputTextAsync = ({
	label,
	isLoading,
	succes,
	error,
	className,
	...props
}) => {
	const icon = getIcon(isLoading, succes, error);
	console.log(icon);
	return (
		<label className={`${style.container}${className || ''}`}>
			<span className={style.label}>{label} </span>
			<input
				className={`${style.input} ${error ? style.inputerror : ''}`}
				{...props}
				type='text'
			/>
			{icon}
			<span className={style.error}>{error} </span>
		</label>
	);
};

const getIcon = (isLoading, succes, error) => {
	if (isLoading) return <UpdateIcon className={style.updateicon} />;
	if (succes) return <CheckCircleIcon className={style.succesicon} />;
	if (error) return <CrossCircleIcon className={style.erroricon} />;

	return null;
};

export default InputTextAsync;
