import useFilters from '../../lib/hooks/useFilters';
import { useUsers } from '../../lib/hooks/useUsers';
import InputTextAsync from '../form/input-text-async/InputTextAsync';
import Title from '../title/Tile';
import UserFilters from '../user-filters/UserFilters';
import UserListPagination from '../user-list-pagination/UserListPagination';
import UsersRow from '../users-row/UsersRow';
import style from './UserList.module.css';

const UserList = () => {
	// filters is a objet with all states (searh,onlyActive,page,totalpage...)
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSort,
		setPages,
		setItemsPerPage,
	} = useFilters();

	const { usersPaginated, totalPage, error, isLoading } = useUsers(filters);

	return (
		<div className={style.container}>
			<Title />
			<InputTextAsync
				label={'Label'}
				error={'error'}
				placeholder='test'
			></InputTextAsync>
			<UserFilters
				search={filters.search}
				setSearch={setSearch}
				onlyActive={filters.onlyActive}
				setOnlyActive={setOnlyActive}
				sort={filters.sort}
				setSort={setSort}
			/>
			<UsersRow users={usersPaginated} isLoading={isLoading} error={error} />
			<UserListPagination
				page={filters.page}
				setPage={setPages}
				itemsPerPage={filters.itemsPerPage}
				setItemsPerPage={setItemsPerPage}
				totalPage={totalPage}
			/>
		</div>
	);
};

export default UserList;
