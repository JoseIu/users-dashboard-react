import style from './UserRole.module.css';
const UserRole = ({ role }) => {
	const userRole = {
		teacher: style.user__teacher,
		student: style.user__student,
		other: style.user__other,
	};

	const userRoleClass = userRole[role];
	return <span className={userRoleClass}>{role} </span>;
};

export default UserRole;
