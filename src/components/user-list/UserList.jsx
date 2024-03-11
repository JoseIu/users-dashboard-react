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
	const {
		filters,
		setSearch,

		setOnlyActive,

		setSort,

		setPages,

		setItemsPerPage,
	} = useFilters();

	const { usersFiltered, totalPage } = getUsers(initialUsers, filters);

	return (
		<div className={style.container}>
			<Title />
			<UserFilters
				search={filters.search}
				setSearch={setSearch}
				onlyActive={filters.onlyActive}
				setOnlyActive={setOnlyActive}
				sort={filters.sort}
				setSort={setSort}
			/>
			<UsersRow users={usersFiltered} />
			<UserListPagination
				page={filters.page}
				setPage={setPages}
				itemPerPage={filters.itemsPerPage}
				setItemsPerPage={setItemsPerPage}
				totalPage={totalPage}
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
	{ onlyActive, search, sort, page, itemsPerPage },
) => {
	let usersFiltered = filterOnlyActive(initialUsers, onlyActive);
	usersFiltered = filterByName(usersFiltered, search);
	usersFiltered = sortBy(usersFiltered, sort);
	const totalPage = Math.ceil(usersFiltered.length / itemsPerPage);

	usersFiltered = usersPagination(usersFiltered, page, itemsPerPage);

	return { usersFiltered, totalPage };
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sort: 0,
		page: 1,
		itemsPerPage: 3,
	});

	const setSearch = (search) => setFilters({ ...filters, page: 1, search });
	const setOnlyActive = (onlyActive) => {
		if (onlyActive && filters.sort === SORT_OPTIONS.ACTIVE) {
			return setFilters({
				...filters,
				sort: SORT_OPTIONS.DEFAULT,
				page: 1,
				onlyActive,
			});
		}
		setFilters({ ...filters, onlyActive });
	};
	const setSort = (sort) => setFilters({ ...filters, sort });

	const setPages = (page) => setFilters({ ...filters, page });
	const setItemsPerPage = (itemsPerPage) => ({ ...filters, itemsPerPage });

	return {
		filters,
		setSearch,
		setOnlyActive,
		setSort,
		setPages,
		setItemsPerPage,
	};
};

export default UserList;
