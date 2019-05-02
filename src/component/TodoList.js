import React from 'react'

// 需要用到仓库
import store from '../store/index'

// 引入 actions 文件中的方法动作
import { addTodo, delTodo } from '../store/actions/index'

// 引入 actionTypes 常量
// import { ADDTODO, DELTODO } from '../store/actionTypes/index'

// const storeState = store.getState()

// 通过 store.getState() 来获取仓库的状态
// console.log(store.getState())

// let next = store.dispatch;
// // 对原有的 store.dispath 做重写
// store.dispatch = (action) => {
//     // 具体做某个动作之前干一些事情。。。
//     console.log(action.type, '动作之前')
//     console.log('仓库的状态是：', store.getState())

//     next(action) //这行代码才是真正的派发动作

//     // 具体做某个动作之后干一些事情。。。
//     console.log(action.type, '动作之后')
//     console.log('仓库的状态是：', store.getState())
// }



class TodoList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputVal: '' ,
            todos: store.getState().todos
        }

        store.subscribe(() => {
            this.setState(() => ({
                todos: store.getState().todos
            }))
        })

        this.chgInput = this.chgInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.inputVal} 
                    onChange={ this.chgInput }
                />
                <button onClick={this.addTodo}>ADD</button>

                <ul>
                    {
                        this.state.todos.map((item, index) => {
                            return <li 
                                key={item}
                                onClick={this.delTodo.bind(null,index)}
                                >
                                { item }
                                </li>
                        })
                    }
                </ul>
            </div>
        )
    }

    /**
     * chgInput 事件
     */
    chgInput(e) {
        let val = e.target.value
        this.setState(() => ({
            inputVal: val
        }))
    }

    /**
     * addTodo ADD事件
     * 只改变组件自身 todos 的数据，而没有去修改仓库
     */
    // addTodo() {
    //     this.setState((prevState) => {
    //         console.log(prevState)
    //         return {
    //             todos: [...prevState.todos, prevState.inputVal],
    //             inputVal: ''
    //         }
    //     })
        
    // }

    // 修改仓库中的数据, 就得派发一个动作
    // 添加操作
    // 传递的是一个对象的动作形式
    // addTodo() {
    //     store.dispatch({
    //         type: ADDTODO,
    //         text: this.state.inputVal
    //     })
    // }

    // 使用函数的形式派发动作
    addTodo() {
        store.dispatch(addTodo(this.state.inputVal))
    }


    /**
     * delTodo 删除操作
     * 传递的是一个对象的动作形式
     */
    // delTodo(index) {
    //     store.dispatch({
    //         type: DELTODO,
    //          index: index
    //     })
    // }

    // 使用函数的形式派发动作
    delTodo(index) {
        store.dispatch(delTodo(index))
    }

}

export default TodoList
