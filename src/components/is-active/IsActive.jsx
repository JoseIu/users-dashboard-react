import style from './IsActive.module.css';

const IsActive = ({ isActive }) => {
	const activeClass = isActive ? style.user__active : style.user__inactive;

	return <span className={activeClass}></span>;
};

export default IsActive;
