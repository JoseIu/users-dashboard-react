import CheckCircleIcon from '../icons/CheckCircleIcon';
import CrossCircleIcon from '../icons/CrossCircleICon';
import style from './IsActive.module.css';

const IsActive = ({ isActive }) => {
	const activeClass = isActive ? style.user__active : style.user__inactive;

	const Icon = isActive ? CheckCircleIcon : CrossCircleIcon;

	return (
		<span className={activeClass}>
			<Icon className={style.user__icon} />
			{isActive ? 'Activo' : 'Inactivo'}
		</span>
	);
};

export default IsActive;
