// List 组件
import React from 'react'
import Jfitem from './Jfitem'

class Jflist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: []
        }
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={this.chgVal.bind(this)}/>
                    <button onClick={this.add.bind(this)}>ADD</button>
                </div>

                <ul>
                    {
                        this.getItem()
                    } 
                </ul>
            </div>
        )
    }

    /**
     * getItem
     */
    getItem() {
        return this.state.list.map((item,index) => {
                return (
                    <Jfitem 
                        text={item}
                        key={index}
                        del={this.del.bind(this,index)}
                    ></Jfitem>
                )
            })
    }

    /**
     * chgVal
     */
    chgVal(e) {
        let val = e.target.value
        console.log(val)
        this.setState(() => ({
            inputVal: val
        }))
    }

    /**
     * add 添加操作
     */
    add() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputVal],
            inputVal: ''
        }))
    }
    

    /**
     * del 删除操作
     */
    del(index) {
        this.setState((prevState) => {
            let list = [...prevState.list]
            list.splice(index,1)
            return {
                list: list
            }
        })      
    }
}

export default Jflist
