const usersPagination = (users, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const totalPage = Math.ceil(users.length / itemsPerPage);

	const usersPaginated = users.slice(startIndex, endIndex);

	return { totalPage, usersPaginated };
};

export default usersPagination;
