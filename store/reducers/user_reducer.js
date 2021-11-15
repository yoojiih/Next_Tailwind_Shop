// 액션 타입 불러옴
import {
    // SET_USER,
    // CLEAR_USER,
    // DELETE_USER,
    // SET_CART,
    // SET_INCREASE_CART,
    // SET_DECREASE_CART,
    ADD_TODO, UPDATE_TODO, DELETE_TODO, CHECKED_TODO 
} from '../actions/types';

// < initial state정의 >   
// Reducer 함수에서 state를 처음으로 불러올 땐 정의되어 있지 않기 때문에, undefined이 되지 않도록 초기값 설정해줌
// const initialUserState = {
//     // 유저정보를 currentUser라는 property에다가 넣어줌 (처음엔 아무것도 없으니 null)
//     // isLoading: 로그인 시 isLoading: true, 로그아웃 시 false로 바꿈
//     user: {
//         currentUser: null,
//         isLoading: false,
//         id: 0,
//         text: '',
//     }
// }
const initialState = [
    {
        id: 0,
        name: 'Redux',
        checked: false
    }
];

export const reducer = (state = initialState, action) => {
    let newTodos = [...state];
    
        switch (action.type) {
        case ADD_TODO:
            return addTodo(newTodos, action);
        case DELETE_TODO:
            return deleteTodo(newTodos, action);
        case UPDATE_TODO:
            return updateTodo(newTodos, action);
        case CHECKED_TODO:
            return checkedTodo(newTodos, action);
        }
        return state;
    };
    
    function addTodo(newTodos, action) {
        return newTodos.concat(action.payload);
    }
    
    function deleteTodo(newTodos, action) {
        newTodos = newTodos.filter((todo) => todo.id !== action.payload);
        return newTodos;
    }
    
    function updateTodo(newTodos, action) {
        const index = newTodos.findIndex((todo) => todo.id === action.payload.id);
        newTodos[index] = action.payload;
        return newTodos;
    }
    
    function checkedTodo(newTodos, action) {
        const findCheckedIndex = newTodos.findIndex((todo) => todo.id === action.payload.id);
        newTodos[findCheckedIndex].checked = !newTodos[findCheckedIndex].checked;
        return newTodos;
    }
    
// reducer는 state와 action을 파라미터로 받아와서 state를 변경하는 유일한 함수이다.
// state는 current statae, action은 액션 생성 함수에서 반환하는 state를 갱신하기 위한 정보를 담은 객체 들어있음
// return { type: SET_USER, payload: user }
// Reducer 함수에서 return되는 값은 새로운 state가 됨
// reducer를 작성 시 action type에 따라서 다르게 처리(state를 갱신)하기 위해 주로 switch 문을 사용

// export default function (state = initialUserState, action) {
//     let newProduct = [...state];
//     // Action 생성 -> Dispatch를 이용하여 Reducer 함수에게 View에서 발생한 Action을 송신 
//     // Reducer 함수는 수령한 Action의 정보 app.js의 dispatch(setUser(user))에 따라 state를 갱신
//     switch (action.type) {
//         // 액션.type === 수정방법이름(SET_USER) -> SET_USER 요청이 들어올 경우
//         case SET_USER:
//             return {
//                 // return 에서 다른 state값은 변경되지 않게 하기 위해 전개연산자 사용
//                 ...state,
//                 // user_action에서 보낸 user정보(payload)를 currentUser로 받음 
//                 currentUser: action.payload,
//                 // 이제 완료됐으니 false로 변환 후 App.js로 이동
//                 isLoading: false
//             }
//         case CLEAR_USER:
//             return {
//                 ...state,
//                 currentUser: null,
//                 isLoading: false
//         }
//         case DELETE_USER:
//             return {
//                 ...state,
//                 currentUser: null,
//                 //currentUser: { ...state.currentUser, photoURL: action.payload },
//                 isLoading: false
//         }
//         case SET_CART :
//             return newProduct.concat(action.payload)
//         case SET_INCREASE_CART :
//             return newProduct.concat(action.payload)
//         case SET_DECREASE_CART :
//             return newProduct.concat(action.payload)
//         // case SET_CART :
//         //     return state.user.cart.map(
//         //         product =>
//         //           product.id === action.id // state array내 각 자료의 id === action.product.id 비교
//         //             ? { ...product, quan: product.quan++ } // quan 값만 증가
//         //             : product // 아니라면 그대로 둠
//         //     );
//         // case SET_INCREASE_CART:  
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             cart: state.user.cart.quan++
//         //         }
//         //     }
//         // case SET_DECREASE_CART:
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             cart: {
//         //                 ...state.user.cart,
//         //                 quan: action.product.quan--
//         //             }
//         //         }
//         //     }
//         // 아무런 수정 요청이 없는 경우 state를 그대로 return
//         default:
//             return state;
//     }
// }
//이 리듀서를 createStore()안에 넣어주면 reducer 완성