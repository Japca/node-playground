import React, {Component} from 'react'
import NavLink from '../NavLink/NavLink'
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export const ROOT = '/'
export const MAIN = '/main'
export const TABLE = '/table'

import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

class Nav extends Component {

    static getDefaultValue(props) {
        let {location: {pathname}} = props.history;
        switch (pathname) {
            case MAIN :
                return 0;
            case TABLE :
                return 1;
            default :
                return 0;
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            value: Nav.getDefaultValue(props),
        };
    }

    handleChange = (event, value) => {
        this.setState({value: value})
        this.navigate(value);

    };

    navigate = (value) => {
        const {history: {push}} = this.props;
        switch (value) {
            case 0 :
                debugger;
                push(MAIN);
                break;
            case 1 :
                push(TABLE);
                break;
            default :
                push(ROOT);
        }
    }

    render() {
        console.info('Nav component');
        const {value} = this.state;
        debugger;
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Main"/>
                        <Tab label="Table"/>
                    </Tabs>
                </AppBar>

            </div>
        )
    }
}


export default withRouter(Nav)