//Container (smart) component
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//import other components, most likely presentational ones
import Counter from './Counter';

export class HeaderCounter extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <Counter counter={counter} />
    );
  }
}

HeaderCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(HeaderCounter);
