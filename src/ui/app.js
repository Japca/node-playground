import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from './Nav/Nav'
import Content from './Content/Content'

import 'typeface-roboto'

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Content/>
        </div>
    </Router>,
            app)
