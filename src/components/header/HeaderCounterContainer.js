//Container (smart) component
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import other components, most likely presentational ones
import HeaderCounter from './HeaderCounter';

//import actions
import * as counterActions from '../../actions/counterActions';

class HeaderCounterContainer extends React.Component {
  render() {
    const {counter} = this.props;
    return (
      <HeaderCounter counter={counter} />
    );
  }
}

HeaderCounterContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
    counter: state.counter
  }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(counterActions, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCounterContainer);
