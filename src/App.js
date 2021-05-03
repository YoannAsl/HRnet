import { BrowserRouter, Route } from 'react-router-dom';
import EmployeeCreationPage from './pages/EmployeeCreationPage';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={EmployeeCreationPage} />
				<Route path='/employee-list' component={EmployeeListPage} />
			</BrowserRouter>
		</div>
	);
}

export default App;
