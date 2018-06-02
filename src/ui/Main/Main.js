import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from './style'

class Main extends Component {

    state = {
        spacing: '16',
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid  item xs={12}>
                    <Grid container justify="center" spacing={Number(spacing)}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} > <Button variant="raised" color="primary" >Click me</Button></Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


export default withStyles(styles)(Main)