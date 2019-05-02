import React from 'react'

import store from '../store/index'

// const storeState = store.getState()

class Hello extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: store.getState().todos
        }

        // dedux 仓库发生变化的时候，这里的 list 不会跟着变化
        // 如果需要跟着变化，那么需要监听仓库的改变
        store.subscribe(() => {
            this.setState(() => {
                return {
                    list: store.getState().todos
                }
                
            })
        })
    }


    render() {
        return (
            <div>
                <p>Wo De Tian</p>

                <ul>
                    {
                        this.state.list.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Hello
