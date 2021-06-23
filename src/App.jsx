import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import faker from 'faker';
import { Modal } from 'ya-basic-react-modal';

import EmployeeCreationPage from './pages/EmployeeCreationPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
	const [employees, setEmployees] = useState([]);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [modalContent, setModalContent] = useState('');

	const addEmployee = (newEmployee) => {
		setEmployees([...employees, { ...newEmployee }]);

		setModalContent('Employee Created !');
		setIsModalOpened(true);
	};

	// Populates state with fake employees
	useEffect(() => {
		let mockEmployees = [];
		for (let i = 0; i < 100; i++) {
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
		setIsModalOpened(false);
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
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		closeButton: {
			marginTop: '8px',
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
					isOpened={isModalOpened}
					content={modalContent}
					handleCloseModal={handleCloseModal}
					style={modalStyle}
					buttonContent='Close'
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
