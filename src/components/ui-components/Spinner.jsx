import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import styles                   from './Spinner.less';

class Spinner extends PureComponent {
    static propTypes = {
        label : PropTypes.string,
        height: PropTypes.number
    }

    static defaultProps = {
        label : '',
        height: null
    }

    render() {
        const { label, height } = this.props;

        return (
            <div className={styles.SpinnerContainer}>
                <div>{label}</div>
                <div className={styles.spinner} style={{ height, width: height }} />
            </div>
        );
    }
}

export default Spinner;
