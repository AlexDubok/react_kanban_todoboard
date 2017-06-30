import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import Icon                     from '../ui-components/Icon.jsx';
import ProgressNav              from './ProgressNav.jsx';
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
                    <Icon type='menu' />
                </div>
                <ProgressNav pathname={this.props.location.pathname} />
                <div className={styles.cta}>
                    <Icon type='createCustom'  />
                    <span>Order a custom banner</span>
                </div>
                <div className={styles.version}>
                    Version: {process.env.VERSION}
                </div>
            </div>
        );
    }
}

export default Header;
