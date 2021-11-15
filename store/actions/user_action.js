// 액션 반환하는 액션 생성 함수
//(user_action -> types.js -> user_reducer -> index.js)
// 1. type.js에 있는 USER ACTION TYPES들 불러옴
// 2. setUser정의 해준 것을 App.js에서 가져와야함 
//     App.js에서 dispatch(setUser(user)); 인자로 user을 넣어줬기 때문에 파라미터로 user가져올 수 있음
// 3. 타입에 따라서 다르게 처리하기 위해 case문 작성
// 4. initialUserState는 유저정보를 currentUser라는 property 에다가 넣어줌
//     - currentUser : 처음엔 값이 아무 것도 없을 테니 null 넣어줌
//     - isLoading : 로그인이 시작되면 로딩하고 있다는 걸 나타냄
// 5. user_action.js- firebase에서 가지고 온 유저정보를 reducer에서 받을 때 currentUser: action.payload 해주면
//   user_action.js의 payload정보를 넣어주는 것 
// 6. 로딩끝났으니 isLoading: false

import {
    SET_USER,
    CLEAR_USER,
    DELETE_USER,
    SET_CART,
    SET_INCREASE_CART,
    SET_DECREASE_CART,
    ADD_TODO, UPDATE_TODO, DELETE_TODO, CHECKED_TODO 
} from './types';

// export function setUser(user) {
//     // firebase에서 로그인된 유저정보가 들어온 상태 -> user_reducer로 가서 user정보를 currentUser로 받음
//     // 액션 생성자 수정후 액션 생성자를 payload에서 user로
//     return {
//         type: SET_USER,
//         payload: user
//     }
// }

// export function clearUser() {
//     return {
//         type: CLEAR_USER
//     }
// }

// export function DeleteUser() {
//     return {
//         type: DELETE_USER
//     }
// }

// export function setCart(proid) {
//     return {
//         type: SET_CART,
//         payload: proId
//     }
// }

// export function setIncreaseCart(proid) {
//     return {
//         type: SET_INCREASE_CART,
//         payload: proId
//     }
// }

// export function setDecreaseCart(proid) {
//     return {
//         type: SET_DECREASE_CART,
//         product: proid
//     }
// }

// TODO

export function addTodo(todo) {
	return{
		type:ADD_TODO,
		payload: todo
	}
}

export function deleteTodo(todo) {
	return{
		type:DELETE_TODO,
		payload: todoId
	}
}

export function updateTodo(todo) {
	return{
		type:UPDATE_TODO,
		payload: todo
	}
}

export function checkedTodo(todo) {
	return{
		type:CHECKED_TODO,
		payload: todo
	}
}