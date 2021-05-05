import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';

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

const Form = () => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<Label htmlFor='firstName'>First Name</Label>
			<input
				{...register('firstName', { required: true })}
				placeholder='First name'
			/>

			<Label htmlFor='lastName'>Last Name</Label>
			<input
				{...register('lastName', { required: true })}
				placeholder='Last name'
			/>

			<Label htmlFor='birthDate'>Date of Birth</Label>
			<Controller
				name='birthDate'
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						onChange={onChange}
						selected={value}
						placeholderText={new Date().toLocaleDateString('en-US')}
					/>
				)}
			/>

			<Label htmlFor='startDate'>Start Date</Label>
			<Controller
				name='startDate'
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						onChange={onChange}
						selected={value}
						placeholderText={new Date().toLocaleDateString('en-US')}
					/>
				)}
			/>

			<Label htmlFor='street'>Street</Label>
			<input
				{...register('street', { required: true })}
				placeholder='Street'
			/>

			<Label htmlFor='city'>City</Label>
			<input
				{...register('city', { required: true })}
				placeholder='City'
			/>

			<Label htmlFor='state'>State</Label>
			<select {...register('state', { required: true })}>
				{states.map((state, index) => (
					<option key={index}>{state.name}</option>
				))}
			</select>

			<Label htmlFor='zipCode'>Zip Code</Label>
			<input
				{...register('zipCode', { required: true })}
				type='number'
				placeholder='10000'
			/>

			<Label htmlFor='department'>Department</Label>
			<select {...register('department')}>
				{departments.map((dpt, index) => (
					<option key={index}>{dpt}</option>
				))}
			</select>

			<button>Save</button>
		</StyledForm>
	);
};

export default Form;
