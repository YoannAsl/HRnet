import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const Table = ({ employees }) => {
	const data = useMemo(() => employees, [employees]);

	const columns = useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
			{
				Header: 'Start Date',
				accessor: 'startDate',
			},
			{
				Header: 'Department',
				accessor: 'department',
			},
			{
				Header: 'Date of Birth',
				accessor: 'birthDate',
			},
			{
				Header: 'Street',
				accessor: 'street',
			},
			{
				Header: 'City',
				accessor: 'city',
			},
			{
				Header: 'State',
				accessor: 'state',
			},
			{
				Header: 'Zip Code',
				accessor: 'zipcode',
			},
		],
		[]
	);

	const tableInstance = useTable({ columns, data });
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance;

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					// Apply the header row props
					<tr {...headerGroup.getHeaderGroupProps()}>
						{
							// Loop over the headers in each row
							headerGroup.headers.map((column) => (
								// Apply the header cell props
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))
						}
					</tr>
				))}
			</thead>
			{/* Apply the table body props */}
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					// Prepare the row for display
					prepareRow(row);
					return (
						// Apply the row props
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								// Apply the cell props
								return (
									<td {...cell.getCellProps()}>
										{cell.render('Cell')}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
