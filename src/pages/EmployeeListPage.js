import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Table from '../components/Table/Table';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const EmployeeListPage = ({ employees }) => {
	return (
		<Container>
			<h1>HRnet</h1>
			<Link to='/'>Home</Link>
			<h2>Current Employees</h2>
			<Table employees={employees} />
		</Container>
	);
};

EmployeeListPage.propTypes = {
	employees: PropTypes.array.isRequired,
};

export default EmployeeListPage;
