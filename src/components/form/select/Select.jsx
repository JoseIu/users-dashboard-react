import ArrowTriangleIcon from '../../icons/ArrowTriangeIcon';
import style from './Select.module.css';

const Select = (props) => (
	<div className={style.select}>
		<select {...props} className={style.select__select}></select>
		<ArrowTriangleIcon className={style.select__arrow} />
	</div>
);

export default Select;
