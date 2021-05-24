import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { departments, states } from './../data';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
	label {
		margin: 10px 0 5px 0;
	}
	input {
		margin-bottom: 7px;
		border: 1px solid grey;
		border-radius: 3px;
		padding: 7px;
	}
	button[type='submit'] {
		margin-top: 10px;
		padding: 4px 10px;
	}
`;

const selectStyle = {
	menu: () => ({
		marginBottom: '7px',
		border: '1px solid grey',
		borderRadius: '3px',
	}),
	container: () => ({
		marginBottom: '7px',
	}),
	control: (provided) => ({
		...provided,
		border: '1px solid grey',
		borderRadius: '3px',
		width: '200px',
		boxShadow: 'none',
		'&:hover': {
			border: '1px solid grey',
		},
	}),
};

const Form = ({ addEmployee }) => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit = (data) => {
		// Formats data
		data.birthDate = data.birthDate.toLocaleDateString('en-US');
		data.startDate = data.startDate.toLocaleDateString('en-US');
		data.state = data.state.value;
		data.department = data.department.value;

		addEmployee(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='firstName'>First Name</label>
			<input {...register('firstName', { required: true })} type='text' />

			<label htmlFor='lastName'>Last Name</label>
			<input {...register('lastName', { required: true })} type='text' />

			<label htmlFor='birthDate'>Date of Birth</label>
			<Controller
				name='birthDate'
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						onChange={onChange}
						selected={value}
						placeholderText={new Date().toLocaleDateString('en-US')}
						yearDropdownItemNumber={50}
						showYearDropdown
						scrollableYearDropdown
						showMonthDropdown
					/>
				)}
			/>

			<label htmlFor='startDate'>Start Date</label>
			<Controller
				name='startDate'
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						onChange={onChange}
						selected={value}
						placeholderText={new Date().toLocaleDateString('en-US')}
						yearDropdownItemNumber={50}
						showYearDropdown
						scrollableYearDropdown
						showMonthDropdown
					/>
				)}
			/>

			<label htmlFor='street'>Street</label>
			<input {...register('street', { required: true })} type='text' />

			<label htmlFor='city'>City</label>
			<input {...register('city', { required: true })} type='text' />

			<label htmlFor='state'>State</label>
			<Controller
				name='state'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Select {...field} options={states} styles={selectStyle} />
				)}
			/>

			<label htmlFor='zipCode'>Zip Code</label>
			<input {...register('zipCode', { required: true })} type='number' />

			<label htmlFor='department'>Department</label>
			<Controller
				name='department'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Select
						{...field}
						options={departments}
						styles={selectStyle}
					/>
				)}
			/>
			<button type='submit'>Save</button>
		</StyledForm>
	);
};

Form.propTypes = {
	addEmployee: PropTypes.func.isRequired,
};

export default Form;
