import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';

import theme from './theme/theme'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import css from '../static/css/reset.css';
import 'typeface-roboto'


const style = {
     // minHeight: '100%',
    // width: '100%',
    //  background: "white"



}

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            {/*<CssBaseline/>*/}
            <div style={style} >
                <Nav/>
                <Content/>
            </div>
        </MuiThemeProvider>
    </Router>,
    app)
