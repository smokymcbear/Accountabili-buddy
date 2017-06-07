import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';
import registerReducer from './RegisterReducer';
import playersListReducer from './PlayersListReducer';
import userProfileReducer from './UserProfileReducer';
import photoEditReducer from './PhotoEditReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer,
  register: registerReducer,
  playersList: playersListReducer,
  userProfile: userProfileReducer,
  photoEdit: photoEditReducer
});

export default rootReducer;
