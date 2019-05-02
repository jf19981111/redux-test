import React from 'react'

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
  
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }


class MyInput extends React.Component {

    constructor(props) {
        super(props)

        this.childInput = this.childInput.bind(this)
        
     }


    render() {
        // 这里要判断你输入的是华氏度还是摄氏度
        // 然后根据 判断出来的 value 来进行计算
        // ？ 如何判断呢？ 是 华氏度 还是 摄氏度
        const { value, curType, type } = this.props
        // let newVal = value
        
        // if (type !== curType) {// 说明数据要发生变化
        //     if (type === 'c') {
        //         newVal = toCelsius(value)
        //     } else if (type === 'f') {
        //         newVal = toFahrenheit(value)
        //     }  
        // }

        return (
            <React.Fragment>
                <input 
                    type="text" 
                    value={ value }
                    onChange={ this.childInput }
                    placeholder={ '请输入' + type }
                />
            </React.Fragment>
        )
    }

    childInput(e) {
        let val = e.target.value
        this.props.onA(val,this.props.type)
    }



    
}

export default MyInput
