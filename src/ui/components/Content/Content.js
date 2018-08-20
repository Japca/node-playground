import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Switch, Route} from 'react-router-dom'

import {ROOT, GAMES, TABLE} from "../Nav/Nav";
import Main from "../Main/Main";
import { DataLayout } from '../../components';

const styles = {

    root: {
         // display: "flex",
         // justifyContent: "space-evenly",

    },


}

class Content extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <Switch>
                    <Route exact path={ROOT} component={Main}/>
                    <Route path={GAMES} component={Main}/>
                    <Route path={TABLE} component={DataLayout}/>
                </Switch>
            </div>
        )
    }
}


export default withStyles(styles)(Content);