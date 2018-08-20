import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

class SimpleTable extends PureComponent {


	render() {
		const {classes, data} = this.props;
		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell numeric>Calories</TableCell>
							<TableCell numeric>Fat (g)</TableCell>
							<TableCell numeric>Carbs (g)</TableCell>
							<TableCell numeric>Protein (g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(n => {
							return (
								<TableRow key={n.id}>
									<TableCell component="th" scope="row">
										{n.name}
									</TableCell>
									<TableCell numeric>{n.calories}</TableCell>
									<TableCell numeric>{n.fat}</TableCell>
									<TableCell numeric>{n.carbs}</TableCell>
									<TableCell numeric>{n.protein}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

SimpleTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);