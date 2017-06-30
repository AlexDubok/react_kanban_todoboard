import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import styles                   from './SelectItem.less';
import Radio                    from './Radio.jsx';

const cx = classnames.bind(styles);

class SelectItem extends PureComponent {
    static propTypes = {
        active  : PropTypes.bool.isRequired,
        text    : PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    handleSelect = () => {
        this.props.onSelect();
    };

    render() {
        const { active, text } = this.props;
        const itemStyles = cx('SelectItem', {
            active
        });

        return (
            <div
                className={itemStyles}
                onClick={this.handleSelect}
            >
                <Radio checked={active} readOnly />
                <div>{text}</div>
            </div>);
    }
}

export default SelectItem;
