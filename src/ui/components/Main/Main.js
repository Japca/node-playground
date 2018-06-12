import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ItemList from '../ItemList/ItemList'
import styles from './style'


class Main extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <Grid container  spacing={16}>
                <Grid item >
                    <ItemList/>
                </Grid>

                <Grid item xs={10}  className={classes.content}>

                    {/*<Grid container >*/}
                        {/*<Grid item>*/}

                        {/*</Grid>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(Main)