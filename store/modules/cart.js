import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: 0,
    valuelist: [{id: 22},],
    re: 'ww',

 }; // 초기 상태 정의

// 리듀서 슬라이스
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state => { state.value ++ },
        decrement: state => { state.value -- },
        // setcart: state => {state.cart_id},
        //state.users.concat(action.user)
        setcart: state => {state.valuelist.valuelist},
        remove: state => {state.re} 
    },
});
// 리듀서 & 액션 리턴
export const { increment, decrement, setcart, remove } = cartSlice.actions; // 액션 생성함수
export default cartSlice.reducer; // 리듀서

//다른 컴포넌트/모듈 내에서 사용하기 위해 정의한 리듀서와 액션 생성함수를  export한다.

// createSlice: action과 reducer를 한 번에 정의한다.
// createAction + createReducer = createSlice
// 비동기적인 리듀서 함수를 정의하고자 할 땐 객체의 프로퍼티로 extraReducers 객체를 추가한다.

