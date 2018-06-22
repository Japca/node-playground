import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


import image from '../../../static/images/jenny.jpg';


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]



const styles = theme => ({
    root: {
        // display: "flex",
        // justifyContent: "space-evenly",

        // boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        // transition: 'box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',

        // maxWidth: "100%",
        // overflowX: "hidden",
        // border: `1px solid `,
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: '#fff',
        overflow: 'auto',
        // maxHeight: "90%",
        // marginTop: theme.spacing.unit * 3,
        //  marginLeft: theme.spacing.unit,



    },

    item: {

        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        transition: 'box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',

        backgroundColor: theme.palette.primary.main,
        // backgroundColor: blue["100"],
        // margin: theme.spacing.unit / 2 ,
        borderRadius: theme.spacing.unit / 2,
        //
        //  marginTop: theme.spacing.unit / 4,
        //  marginBottom: theme.spacing.unit / 4


    },
    textSize: {
        fontSize: 16
    }

});

class ItemList extends Component {

      createItem = index => {
        const { classes } = this.props;
        let checked = 1;
        return (
            <ListItem dense button className={classes.item}>
                <Avatar alt="jenny" src={image}/>
                <ListItemText className={classes.textSize}  primary={`Sudoku`} />
            </ListItem>
        )
    }

    render() {
        const {classes} = this.props;
        return (

            <div className={classes.root}>
                <List>
                    {this.createItem()}

                </List>
            </div>
        );
    }


}

export default withStyles(styles)(ItemList);