import User from '../user/User';
import style from './UsersRow.module.css';

const UsersRow = ({ users, isLoading, error }) => {
	if (isLoading) return <p> Cargando usuarios....🚀</p>;
	if (error) return <p>Error al cargar los usuarios 😥</p>;
	if (!users.length) return <p>No hay usuarios 😅</p>;

	const usersRendered = users.map((user) => <User {...user} key={user.id} />);

	return <div className={style.users}>{usersRendered}</div>;
};

export default UsersRow;
