import 'babel-polyfill';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import {
  incrementCount,
  decrementCount,
} from '../../actions';

export default connect(
  (state) => ({
    count: state.get('counterReducer').get('count'),
  }),
  (dispatch) => ({ 
    onIncrement: () => (
      dispatch(incrementCount())
    ),
    onDecrement: () => (
      dispatch(decrementCount())
    ),
  })
)(Counter);