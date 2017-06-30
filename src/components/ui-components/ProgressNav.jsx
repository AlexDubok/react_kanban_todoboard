import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import classnames               from 'classnames/bind';
import { Link }                 from 'react-router-dom';
import styles                   from './ProgressNav.less';

const cx = classnames.bind(styles);

const LOCATIONS = [
    { label: 'Template selection', path: '/' },
    { label: 'Creation', path: '/create' },
    { label: 'Approve', path: '/approve' },
    { label: 'Download', path: '/download' }
];

class ProgressNav extends PureComponent {
    static propTypes = {
        pathname: PropTypes.string.isRequired
    }

    state = {
        tabIndex : 0,
        lineWidth: 0
    }

    componentDidMount() {
        this.setLinePosition(this.props);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.pathname !== this.props.pathname) {
            this.setLinePosition(nextProps);
        }
    }

    setLinePosition(props) {
        switch (props.pathname) {
            case '/':
                this.setState({ lineWidth: 0, tabIndex: 0 });
                break;
            case '/create':
                this.setState({ lineWidth: '33.3334%', tabIndex: 1 });
                break;
            case '/approve':
                this.setState({ lineWidth: '66.667%', tabIndex: 2 });
                break;
            case '/download':
                this.setState({ lineWidth: '100%', tabIndex: 3 });
                break;
            default:
                break;
        }
    }


    render() {
        const { lineWidth } = this.state;
        const points = LOCATIONS.map((obj, i) => {
            const pointStyles = cx({
                point : true,
                active: this.state.tabIndex >= i
            });

            return (
                <Link
                    key={obj.path}
                    className={pointStyles}
                    to={obj.path}
                >
                    <div className={styles.clickablePoint} ref={point => this[obj.path] = point}>
                        <div>{obj.label}</div>
                    </div>
                </Link>);
        });

        return (
            <div className={styles.ProgressNav} ref={line => this.progressLine = line}>
                {points}
                <div
                    ref={line => this.activeLine = line}
                    className={styles.activeLine}
                    style={{ width: lineWidth }}
                />
            </div>
        );
    }
}

export default ProgressNav;
