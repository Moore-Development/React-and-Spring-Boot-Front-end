import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} 
                decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment} 
                decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={10} incrementMethod={this.increment} 
                decrementMethod={this.decrement}></CounterButton>
            <ResetButton resetMethod={this.reset}></ResetButton>
            <span className="count">{this.state.counter}</span>
          </div>
        );
      }

    increment(by) {
        
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by) {
        
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset() {
        this.setState(
            () => {
                return {counter: 0}
            }
        );
    }
}

class CounterButton extends Component {

    constructor() {
        super();

        /*
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        */
    }

    render() {
        return (
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        )
    }

    /*
    increment() {
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.props.decrementMethod(this.props.by);
    }
    */

  }

  class ResetButton extends Component {

    constructor() {
        super();
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="ResetButton">
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        )
    }

    reset() {
        this.props.resetMethod();
    }
  }

  CounterButton.defaultProps = {
      by: 1
  }

  CounterButton.propTypes = {
      by: PropTypes.number
  }

  export default Counter;