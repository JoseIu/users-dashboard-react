import CheckIcon from '../../icons/CheckIcon';
import style from './CheckBox.module.css';

const CheckBox = (props) => (
	<label className={style.label} htmlFor='active'>
		<input
			{...props}
			className={style.check__input}
			type='checkbox'
			name='active'
			id='active'
		/>
		<CheckIcon className={style.check__icon} />
	</label>
);

export default CheckBox;
