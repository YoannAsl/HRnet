import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { departments, states } from './../data';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
	label {
		margin: 10px 0 5px 0;
	}
	input,
	select {
		margin-bottom: 7px;
		border: 1px solid grey;
		border-radius: 3px;
		padding: 7px;
	}
	button {
		margin-top: 10px;
		padding: 4px 10px;
	}
`;

const Form = ({ addEmployee }) => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit = (data) => {
		// Formats data
		data.birthDate = data.birthDate.toLocaleDateString('en-US');
		data.startDate = data.startDate.toLocaleDateString('en-US');

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
			<select {...register('state', { required: true })}>
				{states.map((state, index) => (
					<option key={index} value={state.abbreviation}>
						{state.name}
					</option>
				))}
			</select>

			<label htmlFor='zipCode'>Zip Code</label>
			<input {...register('zipCode', { required: true })} type='number' />

			<label htmlFor='department'>Department</label>
			<select {...register('department')}>
				{departments.map((dpt, index) => (
					<option key={index}>{dpt}</option>
				))}
			</select>
			<button type='submit'>Save</button>
		</StyledForm>
	);
};

Form.propTypes = {
	addEmployee: PropTypes.func.isRequired,
};

export default Form;
