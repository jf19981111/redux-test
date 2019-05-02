import { ADDTODO, DELTODO } from '../actionTypes/index'

// 新增动作的方法
// 这里使用了闭包
export const addTodo = (text) => {
    return (dispatch) => {
        // 做异步代码
        setTimeout(() => {
            dispatch({
                type: ADDTODO,
                text
            })
        }, 1000)
    }
}

// 删除动作

export const delTodo = (index) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: DELTODO,
                index
            })
        }, 1000)
    }
}


// export const handelTodo = (type,payload) => {
//     return {

//     }
// }
