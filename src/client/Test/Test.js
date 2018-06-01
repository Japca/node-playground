import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Star from '@material-ui/icons/Star';

class Test extends Component {

    render() {
        console.info('Test component');
        return (
            <div>
              <h1>Test compnent</h1>
                <Button variant="raised" color="primary" ><Star/> Touch</Button>
            </div>
        )
    }
}


export default Test