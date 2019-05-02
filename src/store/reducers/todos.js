// 我们 todo相关的 reducer

// 引入 actionTypes 常量
import { ADDTODO, DELTODO } from '../actionTypes/index'

const defaultState = ['吃饭', '睡觉', '打豆豆'];

export default ( state = defaultState, action ) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ADDTODO:
            newState.push(action.text)
            break;
        case DELTODO:
            newState.splice(action.index, 1)
            break;
        default:
            break;
    }

    return newState;
}
