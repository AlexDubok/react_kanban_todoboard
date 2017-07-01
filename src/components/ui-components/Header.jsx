import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import SearchBar              from './SearchBar.jsx';
import styles                   from './Header.less';

class Header extends PureComponent {
    static propTypes = {
        location: PropTypes.object.isRequired,
        history : PropTypes.object.isRequired
    };

    handleGoStart = () => this.props.history.push('/');

    render() {
        return (
            <div className={styles.Header}>
                <div className={styles.menu}>
                    KANBAN BOARD
                </div>
                <SearchBar />
                <div className={styles.version}>
                    Version: {process.env.VERSION}
                </div>
            </div>
        );
    }
}

export default Header;
