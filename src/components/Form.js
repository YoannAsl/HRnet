import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { departments, states } from './../data';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
`;

const Label = styled.label`
	margin: 10px 0 5px 0;
`;

const Form = ({ addEmployee }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [state, setState] = useState('');
	const [birthDate, setBirthDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [department, setDepartment] = useState('');

	const newEmployee = {
		firstName,
		lastName,
		street,
		city,
		zipcode,
		state,
		birthDate,
		startDate,
		department,
	};

	return (
		<StyledForm
			onSubmit={(e) => {
				e.preventDefault();
				addEmployee(newEmployee);
			}}
			id='create-employee'
		>
			<Label htmlFor='first-name'>First Name</Label>
			<input
				type='text'
				id='first-name'
				onChange={(e) => setFirstName(e.target.value)}
				value={firstName}
			/>

			<Label htmlFor='last-name'>Last Name</Label>
			<input
				type='text'
				id='last-name'
				onChange={(e) => setLastName(e.target.value)}
				value={lastName}
			/>

			<Label htmlFor='date-of-birth'>Date of Birth</Label>
			<DatePicker
				id='date-of-birth'
				selected={birthDate}
				onChange={(date) => setBirthDate(date)}
			/>

			<Label htmlFor='start-date'>Start Date</Label>
			<DatePicker
				id='start-date'
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>

			<Label htmlFor='street'>Street</Label>
			<input
				id='street'
				type='text'
				onChange={(e) => setStreet(e.target.value)}
				value={street}
			/>

			<Label htmlFor='city'>City</Label>
			<input
				id='city'
				type='text'
				onChange={(e) => setCity(e.target.value)}
				value={city}
			/>

			<Label htmlFor='state'>State</Label>
			<select
				name='state'
				id='state'
				onChange={(e) => {
					setState(e.target.value);
				}}
				value={state}
			>
				{states.map((state, index) => (
					<option key={index}>{state.name}</option>
				))}
			</select>

			<Label htmlFor='zip-code'>Zip Code</Label>
			<input
				id='zip-code'
				type='number'
				onChange={(e) => setZipcode(e.target.value)}
				value={zipcode}
			/>

			<Label htmlFor='department'>Department</Label>
			<select
				name='department'
				id='department'
				onChange={(e) => setDepartment(e.target.value)}
				value={department}
			>
				{departments.map((dpt, index) => (
					<option key={index}>{dpt}</option>
				))}
			</select>

			<button>Save</button>
		</StyledForm>
	);
};

export default Form;
