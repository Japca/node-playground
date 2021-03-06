import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export const ROOT = '/'
export const GAMES = '/games'
export const TABLE = '/table'

const styles = {
    root: {
        padding: 0,
        margin:0
    }

}

class Nav extends Component {

    static getDefaultValue(props) {
        let {location: {pathname}} = props.history;
        switch (pathname) {
            case GAMES :
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
                push(GAMES);
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
        const { classes } = this.props
        const {value} = this.state;
        return (
            <div className={classes.root} >
                <AppBar className={classes.root} position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Games"/>
                        <Tab label="Table"/>
                        <Tab label="test"/>
                    </Tabs>
                </AppBar>
            </div>
        )
    }
}


export default withRouter(withStyles(styles)(Nav))