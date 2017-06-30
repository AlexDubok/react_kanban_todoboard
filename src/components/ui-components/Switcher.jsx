import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import styles                   from './Switcher.less';

const cx = classnames.bind(styles);

class Switcher extends PureComponent {
    static propTypes = {
        values  : PropTypes.array.isRequired,
        titles  : PropTypes.array,
        payload : PropTypes.string.isRequired,
        selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
        onChange: PropTypes.func.isRequired,
        width   : PropTypes.number
    };

    static defaultProps = {
        titles: null,
        width : null
    }

    handleToggle = (e) => {
        e.stopPropagation();
        const { values, selected } = this.props;
        const nextIndex = values.indexOf(selected) === 0 ? 1 : 0;

        this.props.onChange(this.props.payload, values[nextIndex]);
    };

    handleSelect = (value) => {
        const { selected } = this.props;

        if (value === selected) return;

        this.props.onChange(this.props.payload, value);
    }

    render() {
        const { titles, values, selected, width } = this.props;
        const [labelLeft, labelRight] = titles ? titles : values;
        const switcherStyles = cx('Switcher', {
            checked: selected === values[1]
        });

        return (
            <div className={switcherStyles} style={{ width }}>
                {labelLeft
                    ? <div
                        className={styles.label}
                        onClick={this.handleSelect.bind(this, values[0])}
                        style={{ color: values[0] === selected ? 'black' : '' }}
                      >
                        {labelLeft}
                    </div>
                    : null}
                <div className={styles.tappableArea} onClick={this.handleToggle}>
                    <div className={styles.switch}>
                        <div className={styles.slider} />
                    </div>
                </div>
                {labelRight
                    ? <div
                        className={styles.label}
                        onClick={this.handleSelect.bind(this, values[1])}
                        style={{ color: values[1] === selected ? 'black' : '' }}
                      >
                        {labelRight}
                    </div>
                    : null}
            </div>
        );
    }
}

export default Switcher;
