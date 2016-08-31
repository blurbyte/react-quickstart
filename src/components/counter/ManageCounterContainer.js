//Container (smart) component
//using es2015 class declaration
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import other components, most likely presentational ones
import ManageCounterPanel from './ManageCounterPanel';

//import actions
import * as counterActions from '../../actions/counterActions';

class CounterPage extends React.Component {
  //class constructor, not always needed
  constructor(props, context) {
    super(props, context);
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
  //list of react lifecycle methods: https://facebook.github.io/react/docs/component-specs.html
  //for example componentDidMount()

  onIncrease() {
    //dispatch action creator
    this.props.actions.increaseCounter(this.state.counterStep);
  }

  onDecrease() {
    const {counterStep, counterLowerLimit} = this.state;
    this.props.actions.decreaseIfGreaterThan(counterStep, counterLowerLimit);
  }

  render() {
    const {counterStep, counterLowerLimit} = this.state;
    const {counter} = this.props;
    return (
      <ManageCounterPanel counter={counter} counterStep={counterStep} onIncrease={this.onIncrease} onDecrease={this.onDecrease} lowerLimit={counterLowerLimit}/>
    );
  }
}

CounterPage.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

//second argument is ownProps: const mapStateToProps = (state, ownProps) => (...);
//very useful for getting ids passed via url, etc.
const mapStateToProps = (state) => (
  {
    counter: state.counter
  }
);

//for multiple actions modules use Object.assign() to combine them
//for example: Object.assign({}, counterActions, anotherModuleActions)
//selector functions could be used here
const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(counterActions, dispatch) }
);

//connecting component with redux store via provider
export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
