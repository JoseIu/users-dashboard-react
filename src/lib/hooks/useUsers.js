import { useEffect, useState } from 'react';
import { filterByName, filterOnlyActive, sortBy } from '../users/userFilters';
import usersPagination from '../users/usersPagination';

const fetchUsers = async (setUsers, setError, setIsLoading, signal) => {
	try {
		setIsLoading(true);
		const response = await fetch('http://localhost:3000/users', { signal });

		if (!response.ok) setError(true);

		const data = await response.json();
		setUsers(data);
	} catch (error) {
		setError(true);
	} finally {
		setIsLoading(false);
	}
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

export const useUsers = (filters) => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		fetchUsers(setUsers, setError, setIsLoading, controller.signal);

		return () => controller.abort();
	}, []);
	const { usersPaginated, totalPage } = usersToDisplay(users, filters);

	return { usersPaginated, totalPage, error, isLoading };
};
