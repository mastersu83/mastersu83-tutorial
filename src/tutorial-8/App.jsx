import React from 'react';

const App = () => {
	const [users, setUsers] = React.useState([]);
	const [isLoaded, setisLoaded] = React.useState(true);

	const getUsers = async () => {
		let data = await fetch('https://61eb42297ec58900177cdbf3.mockapi.io/users');
		if (data.ok) {
			data = await data.json();
			setisLoaded(true);
			setUsers(data);
		} else {
			setisLoaded(false);
		}
	};

	return (
		<div>
			{isLoaded ? (
				<ul>
					{users.map((obj, index) => (
						<li key={`${obj.id} + ${index}`}>{obj.userName} вава</li>
					))}
				</ul>
			) : (
				<h4>Пользователи не найдены</h4>
			)}
			<button onClick={getUsers}>Показать пользователей</button>
		</div>
	);
};

export default App;
