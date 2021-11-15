// reducer 합쳐줌
import { combineReducers } from 'redux';
import user from './user_reducer';
//import cart from './cart_reducer';

// reducer를 여러개 사용하기위해 combineReducers 함수 사용하고 combineReducers() 안에 모든 리듀서를 object형식으로 담아 리듀서 통합

const rootReducer = combineReducers({

    user,
    //cart

})

export default rootReducer;