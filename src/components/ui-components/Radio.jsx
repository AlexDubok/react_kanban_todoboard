import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import Icon                     from './Icon.jsx';
import styles                   from './Radio.less';

class Radio extends PureComponent {
    static propTypes = {
        checked : PropTypes.bool.isRequired,
        onChange: PropTypes.func,
        readOnly: PropTypes.bool
    }

    static defaultProps = {
        onChange: null,
        readOnly: false
    }

    handleChange = () => {
        const { readOnly, onChange } = this.props;

        if (readOnly) return;

        if (onChange) {
            onChange();
        }
    }


    render() {
        const { checked, readOnly } = this.props;

        return (
            <div
                className={styles.Radio}
                style={{ pointerEvents: readOnly ? 'none' : '' }}
            >
                {
                    checked
                    ? <Icon type='radioOn' />
                    : <Icon type='radioOff' />
                }
            </div>

        );
    }
}

export default Radio;
