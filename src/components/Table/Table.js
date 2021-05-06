import React, { Fragment, useMemo } from 'react';
import { useSortBy, useTable, useGlobalFilter } from 'react-table';
import styled from 'styled-components';

import GlobalFilter from './GlobalFilter';
import { COLUMNS } from './columns';

const StyledTable = styled.table`
	border: 1px black solid;
	border-spacing: 0;
	tr {
		:last-child {
			td {
				border-bottom: 0;
			}
		}
	}
	th,
	td {
		margin: 0;
		padding: 0.5rem;
		border-right: 1px black solid;
		border-bottom: 1px solid black;
		:last-child {
			border-right: 0;
		}
	}
`;

const Table = ({ employees }) => {
	const data = useMemo(() => employees, [employees]);
	const columns = useMemo(() => COLUMNS, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable({ columns, data }, useGlobalFilter, useSortBy);

	const { globalFilter } = state;

	return (
		<Fragment>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<StyledTable {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						// Apply the header row props
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								// Apply the header cell props
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render('Header')}
									{column.isSorted
										? column.isSortedDesc
											? ' 🔽'
											: ' 🔼'
										: ''}
								</th>
							))}
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
			</StyledTable>
		</Fragment>
	);
};

export default Table;
