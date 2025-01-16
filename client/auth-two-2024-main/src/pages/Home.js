import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			<div className="mx-2">
				<h3>
					Home - Bienvenido{' '}
					<span className="text-primary">{user.firstname + ' ' + user.lastname}</span>
				</h3>
			</div>
		</>
	);
};

export default Home;
