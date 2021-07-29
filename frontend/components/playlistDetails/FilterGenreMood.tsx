import * as React from 'react';
import { useState } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';lor: ''
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
	id: 'artistName' | 'trackName' | 'popularity' | 'rating';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'artistName', label: 'artist', minWidth: 170 },
	{ id: 'trackName', label: 'track', minWidth: 100 },
	{
		id: 'popularity',
		label: 'popularity',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'rating',
		label: 'rating',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
];
const FilterGenreMood = ({ songs }: any) => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [songList, setSongList] = useState(songs);

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
          Song Details
				</Typography>
				<Typography className={classes.subText}>Explore your playlist</Typography>
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
								{songList
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((song: any) => {
										return (
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={song.code}
											>
												{columns.map(column => {
													const value = song[column.id];
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
					count={songList.length}
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
		fontSize: '20px',
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
