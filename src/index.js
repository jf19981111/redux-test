import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './component/TodoList'
import Hello from './component/Hello'
import Cart from './component/Cart'

ReactDOM.render(
    <div>
        <TodoList />
        <hr />
        <Hello />
        <hr />
        <Cart />
    </div>
    ,
    document.getElementById('root')
)
