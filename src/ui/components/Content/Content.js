import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom'

import { ROOT, MAIN, TABLE} from "../Nav/Nav";
import Main from "../Main/Main";
import SimpleTable from "../Table/SimpleTable";


class Content extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={ROOT} component={Main}/>
                <Route path={MAIN} component={Main}/>
                <Route path={TABLE} component={SimpleTable}/>
            </Switch>
        )
    }
}


export default Content;