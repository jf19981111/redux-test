// 这个文件还是我们的注 reducer

import { combineReducers } from 'redux'
import todo from './todos'
import cart from './carts'

export default combineReducers({
    todos: todo,
    cartModule: cart
})






// 这两个都是 拆分出去的 小 reducer
// import todo from './todos'
// import cart from './carts'


// export default (state = {}, action) => {
//     return {
//         // 那么同样的也要接收两个参数
//         todos: todo(state.todos, action),
//         cartModule: cart(state.carts, action)
//     }
// }


/**
 * {
 *      todos: [],
 *      carts: []
 * }
 */

















// ===============================================================


// // reducer 函数， 暴露出去即可
// // 引入 actionTypes 常量
// import { ADDTODO, DELTODO } from '../actionTypes/index'


// // 当项目中引入我们的仓库的时候，那么这个仓库的 reducer 函数会默认初始化 一次

// // 还可以主动的在初始化的时候， 给仓库一些默认的状态

// // defaultState 急速这个仓库的默认状态, 类型可以是字符串、数字...
// const defaultState = {
//     todos: ['吃饭', '睡觉', '打豆豆'],
//     carts: ['草莓', '芒果', '车厘子']
// }
// export default (prevState = defaultState, action) => {
//     // 也可以做一个深拷贝
//     let newState = JSON.parse(JSON.stringify(prevState))

//     // 判断 action.type 的不同来做不同的操作
//     // console.log('当前的动作是' , action.type)
//     // console.log('动作之前的数据' , prevState)
//     // console.log(action)

//     switch (action.type) {
//         case ADDTODO: 
//         // 这样是对仓库的数据做修改了
//         // 不能直接修改仓库的数据， 要 return 一份新的数据
//             // prevState.todos.push(action.text)
//             // 使用下面这个方式做一个拷贝
//             // let newState = Object.assign({}, prevState, {
//             //     todos: [...prevState.todos, action.text]
//             // })

//             // 也可以做一个深拷贝
//             //var newState = JSON.parse(JSON.stringify(prevState))
//             newState.todos.push(action.text)
            
//             // console.log('动作之后的数据' , newState)
//             break;
//         case DELTODO:
//             //var newState = JSON.parse(JSON.stringify(prevState))
//             newState.todos.splice(action.index, 1)
            
//             break;
//         default:
//             break;
//     }
//     // 就是改变仓库
//     // return prevState
//     // console.log('动作之后的数据是', newState)
//     return newState
   
// }
