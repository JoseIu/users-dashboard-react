import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants';

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sort: 0,
		page: 1,
		itemsPerPage: 6,
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
		setFilters({ ...filters, page: 1, onlyActive });
	};
	const setSort = (sort) => setFilters({ ...filters, page: 1, sort });

	const setPages = (page) => setFilters({ ...filters, page });
	const setItemsPerPage = (itemsPerPage) =>
		setFilters({ ...filters, page: 1, itemsPerPage });

	return {
		filters,
		setSearch,
		setOnlyActive,
		setSort,
		setPages,
		setItemsPerPage,
	};
};

export default useFilters;
