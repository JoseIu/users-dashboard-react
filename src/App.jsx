import './App.css';
import UserList from './components/user-list/UserList';
import users from './db/users.json';

const App = () => {
	return (
		<main className='wrapper'>
			<UserList initialUsers={users.users}></UserList>
		</main>
	);
};

export default App;
