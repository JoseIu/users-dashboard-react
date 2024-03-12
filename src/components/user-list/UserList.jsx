import { useEffect, useState } from 'react';
import useFilters from '../../lib/hooks/useFilters';
import {
	filterByName,
	filterOnlyActive,
	sortBy,
} from '../../lib/users/userFilters';
import usersPagination from '../../lib/users/usersPagination';
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

	const { usersPaginated, totalPage } = useUsers(filters);

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
			<UsersRow users={usersPaginated} />
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
const fetchUsers = async (setUsers, signal) => {
	const response = await fetch('http://localhost:3000/users', { signal });

	const data = await response.json();
	setUsers(data);
};

const usersToDisplay = (
	users,
	{ onlyActive, search, sort, page, itemsPerPage },
) => {
	let usersFiltered = filterOnlyActive(users, onlyActive);
	usersFiltered = filterByName(usersFiltered, search);
	usersFiltered = sortBy(usersFiltered, sort);

	const { totalPage, usersPaginated } = usersPagination(
		usersFiltered,
		page,
		itemsPerPage,
	);

	return { usersPaginated, totalPage };
};
const useUsers = (filters) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchUsers(setUsers, controller.signal);

		return () => controller.abort();
	}, []);
	const { usersPaginated, totalPage } = usersToDisplay(users, filters);

	return { usersPaginated, totalPage };
};

export default UserList;
