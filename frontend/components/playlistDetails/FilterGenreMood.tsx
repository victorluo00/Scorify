import * as React from 'react';
import { FC } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { GridFilterModel, XGrid } from '@material-ui/x-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

interface Column {
	id: 'name' | 'code' | 'population' | 'size' | 'density';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'density',
		label: 'Density',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toFixed(2),
	},
];

interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

function createData(
	name: string,
	code: string,
	population: number,
	size: number
): Data {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
];

const FilterGenreMood: FC = () => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<>
			<CssBaseline />
			<Grid container component='main' className={classes.root}>
				<Typography component='div' className={classes.text}>
					Filter by Genre and Mood
				</Typography>
				<Typography className={classes.subText}>Song Details</Typography>
				<div>
					<TableContainer className={classes.tableContainer}>
						<Table
							stickyHeader
							aria-label='sticky table'
							className={classes.table}
						>
							<TableHead>
								<TableRow>
									{columns.map(column => (
										<TableCell
											key={column.id}
											align={column.align}
											className={classes.tableHead}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{rows
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map(row => {
										return (
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={row.code}
											>
												{columns.map(column => {
													const value = row[column.id];
													return (
														<TableCell
															key={column.id}
															align={column.align}
															className={classes.cellText}
														>
															{column.format && typeof value === 'number'
																? column.format(value)
																: value}
														</TableCell>
													);
												})}
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					className={classes.pagination}
				/>
			</Grid>
		</>
	);
};

export default FilterGenreMood;

const useStyles = makeStyles({
	root: {
		height: '100vh',
		backgroundColor: '#191414',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: '70px',
	},
	subText: {
		color: 'white',
		fontSize: '50px',
	},
	table: {
		width: '90vw',
	},
	tableContainer: {
		maxHeight: '50vh',
	},
	tableHead: {
		backgroundColor: '#191414',
		color: 'white',
		fontWeight: 'bold',
	},
	cellText: {
		color: 'white',
	},
	pagination: {
		color: 'white',
	},
});
