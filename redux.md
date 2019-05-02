# redux

javascript 状态管理器

# 使用步骤

1. 安装 yarn add redux
2. src 目录下面创建一个 store 文件夹， 文件夹下面放一个 index.js
3. store 文件夹下面，还有创建我们的 reducers 文件夹， 下面也放一个 index.js
4. store 文件夹下，再创建一个 actions 文件夹， 里面放一个 index.js

- src
    - store
        - actions   // 放置很多的 create actions 函数的文件
            - index.js
        - reducers  // 放置很多的 reducer 函数的文件
            - index.js  // 将它暴露出去即可  当项目中引入我们的仓库的时候，那么这个仓库的 reducer 函数会默认初始化 一次， 还可以主动的在初始化的时候， 给仓库一些默认的状态
    - index.js     // 仓库的 主 js 文件

```js
- reducer/index.js

// defaultState 急速这个仓库的默认状态, 类型可以是字符串、数字...
const defaultState = {
    todos: []
}
export default (prevState = defaultState, action) => {
    // 判断 action.type 的不同来做不同的操作
    console.log(prevState)
    console.log(action)
    return prevState
}
```



# 概念

1. action 动作，它是一个一定要包含有一个 type 属性的 对象
    {
        type： 'addTodo'
        ....
    }

2. reducer 处理动作的函数，（纯函数），在这个的最后，一定要 return 一份新的 state

    那么匹配上的动作之后，要对仓库的数据进行拷贝一份出来，在做修改

    要做一个深拷贝 来返回一个全新的 state

    // prevState 上次的仓库的状态
    // action 这次的动作
    (prevState,action) => {

    }

3. store 仓库的实例对象

    getState（）获取当前的仓库实例

    subscribe(callback) 
        监听仓库的变化，当仓库有变化的时候， callback 就会被执行

    dispatch(obj) 派发动作， obj - 动作
        想要修改仓库中的数据，就使用该动作，然后派发该动作之后 就进入 reducer中，然后 reducer 根据动作的不同来处理不同的操作
        (使用 switch 语句来匹配 通过 action.type 来匹配动作类型)

# 在组件中如何使用 仓库中的数据

    - 1. 引入仓库这个实例对象，然后使用 getState() 方法来获取
    - 注意： 
        1. 一般来说，我们都是把仓库的数据拿出来定义在自己的身上去做操作，这是因为，如果仓库的数据发生变化，是不会引起 render 的
        2. redux 中仓库发生变化的时候，从仓库中拿出来的数据是不会跟着变化的，如果需要跟着变化，那么需要监听仓库的改变
    - 首先我们要明白， 仓库的数据是如何发生变化的， 首先我们触发了一个动作，这个动作走到了 reducer，reducer 返回一个新数据，return 完之后，仓库就发生改变了
    - 然后仓库会主动在使用了它的组件上，发布一点东西，而我们需要去订阅它  （发布订阅模式）


# actionTypes 常量

> 动作类型如果是字符串的话，会带来一些开发时候的不方便，比如字符串写错了。

为了避免单词拼写错误的情况，我们可以将动作类型设置为常量

# createAction 函数

把一个动作对象， 通过函数的方式去生成

在 actions 文件夹中暴露出去，哪里需要用就引入它

他是一个函数，由他去返回一个动作对象


# redux 异步

1. reducer 函数里面的操作都是同步的操作

2. action 动作能写么？ 也不能，默认情况下，我们动作都是一个对象。
3. 能操作的就是，你做完异步之后再派发动作。。。

4. 借助一些中间件，能使我们的redux 支持异步

# redux 中间件

- redux-logger
    安装 yarn add redux-logger
- redux-thunk (重要， 它能让我们的 dispatch 接收函数)
    安装 yarn add redux-thunk

    默认情况下， store.dispatch 只能接收对象
    使用这款中间件之后，store.dispatch() 除了对象之外还可以接收函数
```js
addTodo() {
    store.dispatch((dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'ADDTODO',
                text: this.state.inputVal
            })
        }, 1000)
    })
}
- actions/index.js
或者说在 actions 中暴露出去的是一个异步函数
export const addTodo = (text) => {
    return (dispatch) => {
        // 做异步代码
        setTimeout(() => {
            // 这个 dispatch 接收的是一个对象
            dispatch({
                type: ADDTODO,
                text
            })
        })
    }
}

- TodoList.js
addTodo() {
    // 这个接收的是一个方法
    store.dispatch(addTodo(this.state.inputVal))
}
```

# redux 3大原则

1. 唯一的数据源
2. 数据是不可变的
3. reducer是一个纯函数，相同的输入一定产生相同的输出，并不会有副作用

# redux 常用的 api

1. createStore
2. store.getState()
3. store.subcribe()
4. store.dispatch()

# reducer 的拆分

- combineReducers
使用这个来结合我们拆分出去的小 reducer
