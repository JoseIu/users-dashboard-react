import User from '../user/User';
import style from './UsersRow.module.css';

const UsersRow = ({ users }) => {
	if (!users.length) return 'Usuario no encontrado 😅';

	const usersRendered = users.map((user) => <User {...user} key={user.id} />);

	return <div className={style.users}>{usersRendered}</div>;
};

export default UsersRow;
