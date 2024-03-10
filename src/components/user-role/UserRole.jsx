import style from './UserRole.module.css';
const UserRole = ({ role }) => {
	const userRole = {
		profesor: style.user__teacher,
		estudiante: style.user__student,
		otro: style.user__other,
	};

	const userRoleClass = userRole[role];
	return <span className={userRoleClass}>{role} </span>;
};

export default UserRole;
