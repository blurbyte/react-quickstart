//Container (smart) component
//using es2015 class declaration
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//import other components, most likely presentational ones
import CounterPanel from './CounterPanel';

//import actions
import { increaseCounterByAmount, decreaseCounterByAmount } from 'actions/counterActions';

export class ManageCounter extends React.Component {
  //class constructor, not always needed
  constructor(props) {
    super(props);
    //initialize component state here if needed
    //state variables are used in render()
    //you can use component state and redux at the same time
    this.state = {
      //value counter got increased/decreased by
      counterStep: 4,
      //setting counter lower limit
      counterLowerLimit: 0
    };

    //bind this to event function context
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    //if value is not used in render() use instance variable
    //for example: this.instanceValue = 0;
  }

  //put react lifecycle methods after constructor
  //list of react lifecycle methods: https://facebook.github.io/react/docs/react-component.html
  //for example componentDidMount()

  onIncrease() {
    //dispatch action creator
    this.props.increaseCounterByAmount(this.state.counterStep);
  }

  onDecrease() {
    const { counterStep, counterLowerLimit } = this.state;
    this.props.decreaseCounterByAmount(counterStep, counterLowerLimit);
  }

  render() {
    const { counterLowerLimit } = this.state;
    const { counter } = this.props;
    return (
      <CounterPanel
        counter={counter}
        onIncrease={this.onIncrease}
        onDecrease={this.onDecrease}
        lowerLimit={counterLowerLimit}
      />
    );
  }
}

ManageCounter.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounterByAmount: PropTypes.func.isRequired,
  decreaseCounterByAmount: PropTypes.func.isRequired
};

//second argument is ownProps: const mapStateToProps = (state, ownProps) => (...);
//very useful for getting ids passed via url, etc.
const mapStateToProps = (state) => ({
  counter: state.counter
});

//selector functions could be used here
const mapDispatchToProps = (dispatch) => ({
  increaseCounterByAmount: (amount) => dispatch(increaseCounterByAmount(amount)),
  decreaseCounterByAmount: (amount, lowerLimit) => dispatch(decreaseCounterByAmount(amount, lowerLimit))
});

//connecting component with redux store via provider
export default connect(mapStateToProps, mapDispatchToProps)(ManageCounter);
