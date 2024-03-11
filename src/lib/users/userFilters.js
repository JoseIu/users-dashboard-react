import { SORT_OPTIONS, USER_ROLES } from '../../constants';

export const filterByName = (users, search) => {
	if (!search) return users;
	const normalize = search.toLowerCase();
	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().includes(normalize),
	);
	return filteredUsers;
};

export const filterOnlyActive = (users, active) => {
	if (active === false) return users;

	const filteredUsers = users.filter((user) => user.active);

	return filteredUsers;
};

export const sortBy = (users, sort) => {
	const usersToSort = [...users];
	switch (sort) {
		case SORT_OPTIONS.DEFAULT:
			return usersToSort.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.ROLE:
			return usersToSort.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === USER_ROLES.TEACHER) return -1;
				if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
					return -1;

				return 1;
			});
		case SORT_OPTIONS.ACTIVE:
			return usersToSort.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return users;
	}
};
