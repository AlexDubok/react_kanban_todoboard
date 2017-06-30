import React                  from 'react';
import PropTypes              from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route }              from 'react-router-dom';
import styles                 from './MatchTransition.less';

function MatchTransition({ component: Component, forward, ...rest }) {
    return (
        <Route
            // eslint-disable-next-line react/jsx-no-bind, react/no-children-prop
            {...rest} children={({ match, ...props }) => {
                return (
                    <CSSTransitionGroup
                        transitionName={{
                            enter      : forward ? styles.pageEnterForward : styles.pageEnter,
                            enterActive: forward ? styles.pageEnterActiveForward : styles.pageEnterActive,
                            leave      : forward ? styles.pageLeaveForward : styles.pageLeave,
                            leaveActive: forward ? styles.pageLeaveActiveForward : styles.pageLeaveActive
                        }}
                        component={FirstChild}
                        transitionEnterTimeout={400}
                        transitionLeaveTimeout={400}
                    >
                        {match ?
                            <Component key={props.location.pathname} {...props} />
                        : null}
                    </CSSTransitionGroup>
                );
            }}
        />
    );
}

MatchTransition.propTypes = {
    component: PropTypes.func.isRequired,
    location : PropTypes.object.isRequired,
    forward  : PropTypes.bool
};

MatchTransition.defaultProps = {
    forward: false
};

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);

    return childrenArray[0] || null;
}

export default MatchTransition;
