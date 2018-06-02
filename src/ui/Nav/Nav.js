import React, {Component} from 'react'
import { Link } from 'react-router-dom';


export const ROOT = '/'
export const MAIN = '/main'
export const TABLE = '/table'

class Nav extends Component {

    render() {
        console.info('Nav component');
        return (
            <div>
                <Link to={MAIN}>Main</Link>
                <Link to={TABLE}>Table</Link>
            </div>
        )
    }
}


export default Nav