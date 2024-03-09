import User from '../user/User';
import style from './UsersRow.module.css';

const UsersRow = ({ users, toggleUserActive }) => {
	if (!users.length) return 'Usuario no encontrado 😅';

	const usersRendered = users.map((user) => (
		<User {...user} toggleUserActive={toggleUserActive} key={user.id} />
	));

	return <div className={style.users}>{usersRendered}</div>;
};

export default UsersRow;
