import IconButton from '../buttons/IconButton';
import Select from '../form/select/Select';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import style from './UserListPagination.module.css';

const UserListPagination = ({
	page,
	setPage,
	itemPerPage,
	setItemsPerPage,
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

		<div className={style.pagination__btns}>
			<IconButton kind='black' filled icon={ArrowLeftIcon} />
			<IconButton kind='black' filled icon={ArrowRightIcon} />
		</div>
	</div>
);

export default UserListPagination;
