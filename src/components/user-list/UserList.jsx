import { useState } from 'react';
import Title from '../title/Tile';
import UserFilters from '../user-filters/UserFilters';
import UsersRow from '../users-row/UsersRow';
import style from './UserList.module.css';

const UserList = ({ initialUsers }) => {
	const { search, setSearch, onlyActive, setOnlyActive, sort, setSort } =
		useFilters();

	const [users, setUsers] = useState(initialUsers);

	// const toggleUserActive = (userID) => {
	// 	const newUsers = [...users];
	// 	const userIndex = newUsers.findIndex((user) => user.id === userID);
	// 	if (userIndex === -1) return;

	// 	newUsers[userIndex].active = !newUsers[userIndex].active;

	// 	setUsers(newUsers);
	// };

	let usersFiltered = filterOnlyActive(users, onlyActive);
	usersFiltered = filterByName(usersFiltered, search);
	usersFiltered = sortBy(usersFiltered, sort);

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
		</div>
	);
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sort: 0,
	});

	const setSearch = (search) => setFilters({ ...filters, search });
	const setOnlyActive = (onlyActive) => setFilters({ ...filters, onlyActive });
	const setSort = (sort) => setFilters({ ...filters, sort });

	return { ...filters, setSearch, setOnlyActive, setSort };
};

const filterByName = (users, search) => {
	if (!search) return users;
	const normalize = search.toLowerCase();
	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().includes(normalize),
	);
	return filteredUsers;
};

const filterOnlyActive = (users, active) => {
	if (active === false) return users;

	const filteredUsers = users.filter((user) => user.active);

	return filteredUsers;
};

const sortBy = (users, sort) => {
	const usersToSort = [...users];
	switch (sort) {
		case 1:
			return usersToSort.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case 2:
			return usersToSort.filter((user) => user.active);
		default:
			return users;
	}
};

export default UserList;
