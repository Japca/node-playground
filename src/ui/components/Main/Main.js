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

            <Grid container>
                <Grid item>
                    <ItemList/>
                </Grid>

                {/*<Grid item>*/}
                    {/*<Grid container >*/}
                        {/*<Grid item>*/}
                            {/*<Paper className={classes.paper} ></Paper>*/}
                        {/*</Grid>*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
            </Grid>

        );
    }
}


export default withStyles(styles)(Main)