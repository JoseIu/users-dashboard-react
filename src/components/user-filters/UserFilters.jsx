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
			placeholder='search'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>

		<div className={style.form__active}>
			<CheckBox
				checked={onlyActive}
				onChange={(e) => setOnlyActive(e.target.checked)}
			/>
			<span>Solo activos</span>
		</div>

		<Select value={sort} onChange={(e) => setSort(Number(e.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
			<option value={2}>Por rol</option>
			<option disabled={onlyActive} value={3}>
				Por activación
			</option>
		</Select>
	</form>
);
export default UserFilters;
