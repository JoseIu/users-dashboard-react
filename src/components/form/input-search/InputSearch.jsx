import IconSearch from '../../icons/IconSearch';
import style from './InputSearch.module.css';

const InputSearh = (props) => (
	<div className={style.form__container}>
		<IconSearch className={style.form__icon} />
		<input className={style.form__search} {...props} type='text' />
	</div>
);

export default InputSearh;
