import DeleteIcon from '../icons/DeleteIcons';
import EditIcon from '../icons/EditIcon';
import IsActive from '../is-active/IsActive';
import UserRole from '../user-role/UserRole';
import style from './User.module.css';

const User = ({ name, username, active, role, img }) => {
	return (
		<article className={style.user}>
			<div className={style.user__display}>
				<img className={style.user__img} src={img} alt={name} />
				<span className={style.user__username}>{username} </span>
			</div>
			<h2 className={style.user__name}>{name}</h2>
			<IsActive isActive={active} />
			<UserRole role={role} />
			<div className={style.user__actions}>
				<EditIcon className={style.user__edit} />
				<DeleteIcon className={style.user__delete} />
			</div>
		</article>
	);
};

export default User;
