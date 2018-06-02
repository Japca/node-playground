import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

import styles from './styles'

const NavLink = ({classes, to, text, selected}) => (
    <Tab label={text}>
        <div className={classes.navLink}>
            <Link to={to}>
                {/*<Tab label={text}/>*/}
            </Link>
        </div>
    </Tab>
);

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default withStyles(styles)(NavLink);