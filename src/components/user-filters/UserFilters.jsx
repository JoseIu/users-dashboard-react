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
		<input
			className={style.form__search}
			type='text'
			placeholder='search'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
		<label className={style.form__active} htmlFor='active'>
			<input
				className={style.form__checkbox}
				type='checkbox'
				name='active'
				id='active'
				checked={onlyActive}
				onChange={(e) => setOnlyActive(e.target.checked)}
			/>
			Only active
		</label>

		<select value={sort} onChange={(e) => setSort(Number(e.target.value))}>
			<option value={0}>Default</option>
			<option value={1}>Sort</option>
			<option value={2}>Only Active</option>
		</select>
	</form>
);

export default UserFilters;
