import {combineReducers, configureStore} from '@reduxjs/toolkit';

// Calling our reducers
// Assignment: Find the meaning and proper uses of redux and reducer
import questionReducer from '../question_reducer';

import resultReducer from '../result_reducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
});

//creating a store with reducer

export default configureStore({reducer: rootReducer});
