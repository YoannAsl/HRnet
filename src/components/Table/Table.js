import React, { Fragment, useMemo } from 'react';
import {
	useSortBy,
	useTable,
	useGlobalFilter,
	usePagination,
} from 'react-table';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalFilter from './GlobalFilter';
import { COLUMNS } from './columns';

const SearchContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	input,
	select {
		margin-bottom: 7px;
		border: none;
		background-color: hsl(0, 0%, 94%);
		border-radius: 3px;
		padding: 4px;
	}
`;

const StyledTable = styled.table`
	width: 80%;
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
		padding: 1rem 1.2rem;
		border-bottom: 1px solid black;
		:last-child {
			border-right: 0;
		}
	}
	th {
		user-select: none;
		text-align: initial;
	}
`;

const Pagination = styled.div`
	margin-bottom: 10px;
`;

const Table = ({ employees }) => {
	const data = useMemo(() => employees, [employees]);
	const columns = useMemo(() => COLUMNS, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		state,
		setGlobalFilter,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		setPageSize,
	} = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

	return (
		<Fragment>
			<SearchContainer>
				<label>
					Show{' '}
					<select
						name='pageSize'
						value={state.pageSize}
						onChange={(e) => setPageSize(Number(e.target.value))}
					>
						{[10, 25, 50, 100].map((size) => (
							<option key={size} value={size}>
								{size}
							</option>
						))}
					</select>{' '}
					entries
				</label>
				<GlobalFilter
					filter={state.globalFilter}
					setFilter={setGlobalFilter}
				/>
			</SearchContainer>
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
											? ' ▼'
											: ' ▲'
										: ''}
								</th>
							))}
						</tr>
					))}
				</thead>
				{/* Apply the table body props */}
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
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
			<Pagination>
				<button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					Previous
				</button>
				<span>
					{' '}
					Page {state.pageIndex + 1} of {pageOptions.length}{' '}
				</span>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					Next
				</button>
			</Pagination>
		</Fragment>
	);
};

Table.propTypes = {
	employees: PropTypes.array.isRequired,
};

export default Table;
