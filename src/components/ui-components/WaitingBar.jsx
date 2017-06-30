import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import styles                   from './WaitingBar.less';

class WaitingBar extends PureComponent {
    static propTypes = {
        height: PropTypes.number
    }

    static defaultProps = {
        label : '',
        height: null
    }

    render() {
        const { height } = this.props;

        return (
            <div className={styles.BarContainer}>
                <div className={styles.waiting} style={{ height, width: height }} />
            </div>
        );
    }
}

export default WaitingBar;
