import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom'

import { ROOT, MAIN, TABLE} from "../Nav/Nav";
import Main from "../Main/Main";
import Table from "../Table/Table";


class Content extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={ROOT} component={Main}/>
                <Route path={MAIN} component={Main}/>
                <Route path={TABLE} component={Table}/>
            </Switch>
        )
    }
}


export default Content;