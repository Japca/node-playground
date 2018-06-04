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


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.primary.main,
    },
});

class ItemList extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <List>
                    <ListItem  spacing={16}>
                            <Button variant="fab" color="secondary">
                                <ImageIcon/>
                            </Button>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                    </ListItem>
                    <ListItem>
                            <Button variant="fab" color="secondary">
                            <WorkIcon/>
                            </Button>
                        <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                    </ListItem>
                    <ListItem>
                        <Button variant="fab" color="secondary">
                            <BeachAccessIcon/>
                        </Button>
                        <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ItemList);