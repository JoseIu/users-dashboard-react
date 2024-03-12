import { useEffect, useState } from 'react';
import { filterByName, filterOnlyActive, sortBy } from '../users/userFilters';
import usersPagination from '../users/usersPagination';

const fetchUsers = async (setData, setError, signal) => {
	try {
		const response = await fetch('http://localhost:3000/users', { signal });

		if (!response.ok) return setError();

		const data = await response.json();
		setData(data);
	} catch (error) {
		setError();
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
	const [users, setUsers] = useState({
		data: [],
		error: false,
		isLoading: true,
	});

	const setData = (data) => setUsers({ data, isLoading: false, error: false });
	const setError = () => setUsers({ data: [], isLoading: false, error: true });

	useEffect(() => {
		const controller = new AbortController();
		fetchUsers(setData, setError, controller.signal);

		return () => controller.abort();
	}, []);
	const { usersPaginated, totalPage } = usersToDisplay(users.data, filters);

	return {
		usersPaginated,
		totalPage,
		error: users.error,
		isLoading: users.isLoading,
	};
};
