import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";

import image from '../../../static/images/jenny.jpg';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]



const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",

        maxWidth: "100%",
        overflowX: "hidden",
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.secondary.main,
      //  overflow: 'auto',
        maxHeight: "90%",
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,



    },

    item: {
        backgroundColor: theme.palette.primary.main,
        // backgroundColor: blue["100"],
        // margin: theme.spacing.unit / 2 ,
        borderRadius: theme.spacing.unit / 2,
        //
         marginTop: theme.spacing.unit / 4,
         marginBottom: theme.spacing.unit / 4


    }
});

class ItemList extends Component {

    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    createItem = index => {
        const { classes } = this.props;
        let checked = 1;
        return (
            <ListItem key={index} dense button className={classes.item}>
                <Avatar alt="jenny" src={image}/>
                <ListItemText primary={`Line item ${index}`} />
                <ListItemSecondaryAction>
                    <Checkbox
                       // onChange={this.handleToggle(index)}
                       //  checked={this.state.checked.indexOf(index) !== -1}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <List>
                    {data.map(index => {
                        return this.createItem(index)
                    })}
                </List>
            </div>
        );
    }


}

export default withStyles(styles)(ItemList);