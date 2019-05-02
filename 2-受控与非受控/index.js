import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 普通文本框数据
            username: '二愣子',
            password: '',
            // select 选择框数据
            myLove: '',
            // 单选框数据
            sex: 'man',
            // 多选框数据
            todos: ['吃饭', '喝水'],
            isOkTodos: [],

            isOk: false
        }
        this.chgName = this.chgName.bind(this)
        this.chgPwd = this.chgPwd.bind(this)
        this.handelLogin = this.handelLogin.bind(this)
        this.chgLove = this.chgLove.bind(this)
        this.chgSex = this.chgSex.bind(this)
        this.chgTodo = this.chgTodo.bind(this)
        this.chgOk = this.chgOk.bind(this)
    }
    render() {
        return (
            <div>
                {/* 受控 普通文本框input */}
                <input type="text" value={ this.state.username } onChange={ this.chgName } />
                <input type="text" value={ this.state.password } onChange={ this.chgPwd } />

                <hr />

                {/* 非受控 普通文本框 input */}
                <input 
                    type="text" 
                    ref={ (el) => { this.username = el } } 
                    defaultValue={ this.state.username } />
                <input type="password"  ref="myInput"/>

                <hr />

                {/* 受控的 select */}
                <select value={ this.state.myLove } onChange={this.chgLove}>
                    <option disabled value="">请选择</option>
                    <option value="cherry">车厘子</option>
                    <option value="mango">芒果</option>
                    <option value="strawberry">草莓</option>
                </select>
                
                {/* 非受控 select */}
                <select ref={ (el) => { this.mySelect = el } } defaultValue={this.state.myLove}>
                    <option disabled value="">请选择</option>
                    <option value="cherry">车厘子</option>
                    <option value="mango">芒果</option>
                    <option value="strawberry">草莓</option>
                </select>

                <hr />

                {/* 
                    受控的 单选框 
                    通过数据控制的是他是否被选中
                
                */}

                <input 
                    type="radio" name="sex" value="man" 
                    checked={this.state.sex === 'man'} 
                    onChange={this.chgSex}
                />男
                <input 
                    type="radio" name="sex" value="woman" 
                    checked={this.state.sex === 'woman'}
                    onChange={this.chgSex} 
                />女


                {/* 非受控的单选框 */}
                <input 
                    type="radio" 
                    name="sex1" 
                    value="man" 
                    defaultChecked={this.state.sex === 'man'}
                />
                <input 
                    type="radio" name="sex1" value="woman" 
                    defaultChecked={this.state.sex === 'woman'}
                />

                <hr />

                {/* 受控的 多选框 */}
                {
                    this.state.todos.map((item,index) => {
                        return (
                            <React.Fragment key={ index }>
                                <input type="checkbox" value={item} 
                                    checked={this.state.isOkTodos.indexOf(item) > -1}
                                    onChange={ this.chgTodo }
                                /> 
                                { item } 
                            </React.Fragment>
                        )
                    })
                }

                {/* 单个受控多选框 */}
                <input 
                    type="checkbox" 
                    checked={this.state.isOk} 
                    onChange={this.chgOk} 
                />你必须同意xxx...

                {/* 非受控的多选框 */}






                <button onClick={ this.handelLogin } disabled={!this.state.isOk}>登录</button>
            </div>
        )
    }

    /**
     * chgName 修改 username
     */
    chgName(e) {
        let val = e.target.value
        this.setState(() => ({
            username: val
        }))
    }

    /**
     * chgPwd 修改 pwd
     */
    chgPwd(e) {
        let val = e.target.value
        this.setState(() => ({
            password: val
        }))
    }

    /**
     * chgLove 选择
     */
    chgLove(e) {
        let val = e.target.value
        console.log(e.target.value)
        this.setState(() => ({
            myLove: val
        }))
    }

    /**
     * chgSex
     */
    chgSex(e) {
        let val = e.target.value
        this.setState(() => ({
            sex: val
        }))
    }

    /**
     * chgTodo
     */
    chgTodo(e) {
        let val = e.target.value
        // 判读当前点击的是否已存在 isOkTodos 中
        // 存在 删除， 不存在 就 push
        let todos = [...this.state.isOkTodos]
        let index = this.state.isOkTodos.findIndex((item) => {
            //console.log(val)
            return item === val
        })
        console.log(index)
        if (index > -1) {
            // 存在
            todos.splice(index,1)
        } else {
            todos.push(val)
        }
        this.setState(() => ({
            isOkTodos: todos
        }))
    }

    /**
     * chgOk
     */
    chgOk() {
        this.setState((prevSttate) => ({
            isOk: !prevSttate.isOk
        }))
    }



    /**
     * handelLogin 登录
     */

     handelLogin() {
        // console.log(this.state.username)
        // console.log(this.state.password)

        // console.log(document.getElementById('username').value)
        // console.log(document.getElementById('password').value)

        // console.log(this.username.value)
        // console.log(this.refs.myInput.value)
        // console.log(this.mySelect.value)

        // console.log(this.refs.mySex.value)
        // console.log(document.getElementsByName('sex1'))
        var els = document.getElementsByName('sex1')

        var curInput = null
        for(var i = 0; i < els.length; i++) {
            if (els[i].checked) {
                console.log(els[i])
                curInput = els[i]
                break;
            }
        }
        console.log(curInput.value)

     }


}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
