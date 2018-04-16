import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  count,
  onIncrement,
  onDecrement,
}) => (
  <p>
    Clicked: {count} times
    {' '}
    <button onClick={onIncrement}>
      +
    </button>
    {' '}
    <button onClick={onDecrement}>
      -
    </button>
    {' '}
  </p>
);
// 注意要檢查 propTypes 和給定預設值
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
Counter.defaultProps = {
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {}
}
export default Counter;