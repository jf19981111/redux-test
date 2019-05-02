import React from 'react'
import ReactDOM from 'react-dom'

import MyInput from './MyInput'

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputVal: '',
            curType: '' // 当前是在哪个输入框里面输入的内容
        }
        this.chgInput = this.chgInput.bind(this)
        
    }


    render() {
        let { inputVal, curType } = this.state
        let cInput = inputVal
        let fInput = inputVal
        if (curType === 'c') {
            fInput = toFahrenheit(inputVal)
        } else if (curType === 'f') {
            cInput = toCelsius(inputVal)
        }

        return (
            <div>
                <MyInput 
                    type="c"
                    value= { cInput }
                    curType={ curType }
                    onA={ this.chgInput }
                />
                <MyInput 
                    type="f"
                    value= { fInput }
                    curType={ curType }
                    onA= { this.chgInput }
                />
            </div>
        )
    }

    /**
     * onChange 是父组件传递的方法 改变 inputVal
     * 父组件自身的方法
     * @param {String} val 输入的内容
     * @param {String} type 当前输入框的类型 是 c 还是 f
     */
    chgInput(val, type) {
        // console.log(e.target.value)
        // let val = e.target.value
        this.setState(() => ({
            inputVal: val,
            curType: type
        }))
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
)
