// cart 相关的数据

const defaultState = ['草莓', '芒果', '车厘子'] 


export default ( state = defaultState, action ) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        default:
            break;
    }

    return newState;
}
