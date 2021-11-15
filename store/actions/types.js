// 액션 타입 만들어 user_action(액션 생성함수)으로 내보내는 역할 
// 액션은 무슨일이 일어났는지 설명해주는 객체
// 예를 들어 user라는 state를 수정해 주는 역할을 하는 액션은 타입을 SET_USER와 같이 선언하고, 
// user_action(액션 생성함수)에서 setUser(user)라는 이름의 함수를 만들어 주면 됨

// USER ACTION TYPES 정의 -> 주로 대문자로 선언
// export const SET_USER = "set_user";
// export const CLEAR_USER = "clear_user";
// export const DELETE_USER = "delete_user";

// CART ACTION TYPES
// export const SET_CART = "set_cart";
// export const SET_INCREASE_CART = "set_increase_cart";
// export const SET_DECREASE_CART = "set_decrease_cart";

// TODO ACTION TYPES

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CHECKED_TODO = "CHECKED_TODO";
