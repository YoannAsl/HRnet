import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import Form from './../components/Form';
const Form = React.lazy(() => import('./../components/Form'));

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const EmployeeCreationPage = ({ addEmployee }) => {
	return (
		<Container>
			<h1>HRnet</h1>
			<Link to='/employee-list'>View Current Employees</Link>
			<h2>Create Employee</h2>
			<Form addEmployee={addEmployee} />
		</Container>
	);
};

export default EmployeeCreationPage;
