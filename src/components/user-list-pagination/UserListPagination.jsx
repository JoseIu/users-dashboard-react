import Select from '../form/select/Select';
import PageSelector from '../page-selector/PageSelector';
import style from './UserListPagination.module.css';

const UserListPagination = ({
	page,
	setPage,
	itemPerPage,
	setItemsPerPage,
	totalPage,
}) => (
	<div className={style.pagination}>
		<div className={style.pagination__select}>
			<Select
				value={itemPerPage}
				onChange={(ev) => setItemsPerPage(Number(ev.target.value))}
			>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={6}>6</option>
			</Select>
			<span>Elementos por página</span>
		</div>

		<PageSelector page={page} setPage={setPage} totalPage={totalPage} />
	</div>
);

export default UserListPagination;
