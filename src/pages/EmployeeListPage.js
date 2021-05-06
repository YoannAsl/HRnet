import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table/Table';

const EmployeeListPage = ({ employees }) => {
	return (
		<main>
			<h1>Current Employees</h1>
			<Table employees={employees} />
			<Link to='/'>Home</Link>
		</main>
	);
};

export default EmployeeListPage;
