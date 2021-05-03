import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EmployeeCreationPage from './pages/EmployeeCreationPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
	const [employees, setEmployees] = useState([]);

	const addEmployee = (newEmployee) => {
		setEmployees([...employees, { ...newEmployee }]);
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/'>
					<EmployeeCreationPage addEmployee={addEmployee} />
				</Route>
				<Route path='/employee-list' component={EmployeeListPage} />
			</BrowserRouter>
		</div>
	);
}

export default App;
