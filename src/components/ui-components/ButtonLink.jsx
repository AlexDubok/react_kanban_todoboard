import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { Link }                 from 'react-router-dom';
import classnames               from 'classnames/bind';
import Icon                     from './Icon.jsx';
import styles                   from './ButtonLink.less';

const cx = classnames.bind(styles);

class ButtonLink extends PureComponent {
    static propTypes = {
        to      : PropTypes.string.isRequired,
        icon    : PropTypes.string.isRequired,
        iconType: PropTypes.string.isRequired,
        type    : PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
        width   : PropTypes.number,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        width   : null
    }

    render() {
        const { width, type, disabled, children, to, icon, iconType } = this.props;
        const buttonStyles = cx('Button', {
            [type]    : type,
            [iconType]: iconType,
            disabled
        });

        return (
            <Link
                className={buttonStyles}
                to={to}
                style={{ width }}
            >
                {
                    icon === 'left' ? <Icon type={iconType} /> : null
                }
                {children}
                {
                    icon === 'right' ? <Icon type={iconType} /> : null
                }
            </Link>
        );
    }
}

export default ButtonLink;
