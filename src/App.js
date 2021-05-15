import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import faker from 'faker';
import { Modal } from 'ya-basic-react-modal';

import EmployeeCreationPage from './pages/EmployeeCreationPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
	const [employees, setEmployees] = useState([]);
	const [isOpened, setIsOpened] = useState(false);

	const addEmployee = (newEmployee) => {
		setEmployees([...employees, { ...newEmployee }]);
		setIsOpened(true);
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

	const handleCloseModal = () => {
		setIsOpened(false);
	};

	const modalStyle = {
		content: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: 'white',
			padding: '15px 30px',
			borderRadius: '10px',
		},
		closeButton: {
			color: 'red',
		},
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<EmployeeCreationPage addEmployee={addEmployee} />
					</Route>
					<Route path='/employee-list'>
						<EmployeeListPage employees={employees} />
					</Route>
				</Switch>
				<Modal
					isOpened={isOpened}
					content='Employee Created !'
					handleCloseModal={handleCloseModal}
					style={modalStyle}
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
