import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import faker from 'faker';

import EmployeeCreationPage from './pages/EmployeeCreationPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
	const [employees, setEmployees] = useState([]);

	const addEmployee = (newEmployee) => {
		setEmployees([...employees, { ...newEmployee }]);
	};

	// Populates state with fake employees
	useEffect(() => {
		let mockEmployees = [];
		for (let i = 0; i < 10; i++) {
			let newEmployee = {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				street: faker.address.streetName(),
				city: faker.address.city(),
				zipCode: faker.address.zipCode(),
				state: faker.address.stateAbbr(),
				birthDate: faker.date.past().toLocaleDateString('en-US'),
				startDate: faker.date.future().toLocaleDateString('en-US'),
				department: faker.name.jobArea(),
			};
			mockEmployees.push(newEmployee);
		}
		setEmployees(mockEmployees);
	}, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/'>
					<EmployeeCreationPage addEmployee={addEmployee} />
				</Route>
				<Route path='/employee-list'>
					<EmployeeListPage employees={employees} />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
