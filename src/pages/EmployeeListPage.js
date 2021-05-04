import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const EmployeeListPage = ({ employees }) => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Table employees={employees} />
		</div>
	);
};

export default EmployeeListPage;
