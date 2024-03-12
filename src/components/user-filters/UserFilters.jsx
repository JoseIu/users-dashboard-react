import { SORT_OPTIONS } from '../../constants/sortOptions';
import Button from '../buttons/button/Button';
import CheckBox from '../form/checkbox/CheckBox';
import InputSearh from '../form/input-search/InputSearch';
import Select from '../form/select/Select';
import style from './UserFilters.module.css';

const UserFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sort,
	setSort,
}) => (
	<form className={style.form}>
		<InputSearh
			placeholder='Buscar....'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>

		<Select value={sort} onChange={(e) => setSort(Number(e.target.value))}>
			<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
			<option value={SORT_OPTIONS.NAME}>Por nombre</option>
			<option value={SORT_OPTIONS.ROLE}>Por rol</option>
			<option disabled={onlyActive} value={SORT_OPTIONS.ACTIVE}>
				Por activación
			</option>
		</Select>
		<div className={style.form__active}>
			<CheckBox
				checked={onlyActive}
				onChange={(e) => setOnlyActive(e.target.checked)}
			/>
			<span>Solo activos</span>
		</div>
		<Button kind='primary'>Butón</Button>
	</form>
);
export default UserFilters;
