// 仓库的主文件
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers/index'

/**
 *  createStore 用来创建仓库
 *  @param {Function} reducer
 *  @return {Object} store 仓库的对象
 */
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

// 目前的使用情况是： 哪个组件要使用这个仓库， 那么就在哪个组件中引入这个仓库
