import IsActive from '../is-active/IsActive';
import UserRole from '../user-role/UserRole';
import style from './User.module.css';

const User = ({ id, name, active, role, img, toggleUserActive }) => {
	return (
		<article className={style.user}>
			<img className={style.user__img} src={img} alt={name} />
			<div className={style.user__info}>
				<h2 className={style.user__name}>
					{name}
					<UserRole role={role} />
				</h2>

				<IsActive isActive={active} />
			</div>
			<button onClick={() => toggleUserActive(id)} className={style.user__btn}>
				{active ? 'Disable' : 'Activate'}
			</button>
		</article>
	);
};

export default User;
