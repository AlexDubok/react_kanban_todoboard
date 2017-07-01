import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { Route }                from 'react-router-dom';
import Header                  from '../ui-components/Header.jsx';
import styles                   from './Layout.less';


class Layout extends PureComponent {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    state = {
        forwardTransition: true
    }


    render() {
        return (
            <div className={styles.Layout}>
                <Route path='/' component={Header} />
            </div>
        );
    }
}


export default Layout;
