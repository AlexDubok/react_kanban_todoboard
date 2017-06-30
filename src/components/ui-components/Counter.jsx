import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import PropTypes              from 'prop-types';
import { changeCounterValue } from '../../actions/counter.js';

class Counter extends Component {
    static propTypes = {
        changeCounterValue: PropTypes.func.isRequired,
        counter           : PropTypes.number.isRequired
    };

    handleIncrement = () => this.props.changeCounterValue(1);

    handleDecrement = () => this.props.changeCounterValue(-1);

    render() {
        const { counter } = this.props;

        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <div>{counter}</div>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    };
};

export default connect(mapStateToProps, { changeCounterValue })(Counter);
