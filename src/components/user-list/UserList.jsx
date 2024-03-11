import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import {
	filterByName,
	filterOnlyActive,
	sortBy,
} from '../../lib/users/userFilters';
import Title from '../title/Tile';
import UserFilters from '../user-filters/UserFilters';
import UserListPagination from '../user-list-pagination/UserListPagination';
import UsersRow from '../users-row/UsersRow';
import style from './UserList.module.css';

const UserList = ({ initialUsers }) => {
	const { search, setSearch, onlyActive, setOnlyActive, sort, setSort } =
		useFilters();

	const [page, setPages] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	const { usersFiltered } = getUsers(
		initialUsers,
		onlyActive,
		search,
		sort,
		page,
		itemsPerPage,
	);

	return (
		<div className={style.container}>
			<Title />
			<UserFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sort={sort}
				setSort={setSort}
			/>
			<UsersRow users={usersFiltered} />
			<UserListPagination
				page={page}
				setPage={setPages}
				itemPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</div>
	);
};

const usersPagination = (users, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return users.slice(startIndex, endIndex);
};
const getUsers = (
	initialUsers,
	onlyActive,
	search,
	sort,
	page,
	itemsPerPage,
) => {
	let usersFiltered = filterOnlyActive(initialUsers, onlyActive);
	usersFiltered = filterByName(usersFiltered, search);
	usersFiltered = sortBy(usersFiltered, sort);

	usersFiltered = usersPagination(usersFiltered, page, itemsPerPage);

	return { usersFiltered };
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sort: 0,
	});

	const setSearch = (search) => setFilters({ ...filters, search });
	const setOnlyActive = (onlyActive) => {
		if (onlyActive && filters.sort === SORT_OPTIONS.ACTIVE) {
			return setFilters({ ...filters, sort: SORT_OPTIONS.DEFAULT, onlyActive });
		}
		setFilters({ ...filters, onlyActive });
	};
	const setSort = (sort) => setFilters({ ...filters, sort });

	return { ...filters, setSearch, setOnlyActive, setSort };
};

export default UserList;
