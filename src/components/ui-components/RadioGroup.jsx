import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import Radio                    from './Radio.jsx';
import styles                   from './RadioGroup.less';

const cx = classnames.bind(styles);

class RadioGroup extends PureComponent {
    static propTypes = {
        name    : PropTypes.string.isRequired,
        items   : PropTypes.array.isRequired,
        selected: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
        style   : PropTypes.object
    }

    static defaultProps = {
        style: {}
    }


    handleSelect = (item) => {
        const { name, onSelect } = this.props;

        onSelect(name, item.value);
    };

    render() {
        const { selected, items, style } = this.props;

        return (
            <div className={styles.RadioGroup} style={style}>
                {
                    items.map((item, i) => {
                        const labelStyle = cx('label', {
                            selected: selected === item.value
                        });

                        return (<div key={i} className={styles.item} onClick={this.handleSelect.bind(this, item)}>
                            <Radio
                                checked={selected === item.value}
                                readOnly
                            />
                            <div className={labelStyle}>{item.title}</div>
                        </div>);
                    })
                }
            </div>

        );
    }
}

export default RadioGroup;
