import { connect } from 'react-redux';
import Timer from './Presenter';

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timeDuration } = state;
  return {
    isPlaying,
   elapsedTime,
   timeDuration
  }
}

export default connect(mapStateToProps)(Timer);