import React from 'react'
import store from '../store/index'

class Cart extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            carts: store.getState().cartModule
        }

        store.subscribe(() => {
            this.setState(() => ({
                carts: store.getState().cartModule
            }))
        })
    }

    render() {
        return (
            <div>
                <h1>我是购物车</h1>
                <ul>
                    {
                        this.state.carts.map((item, index) => {
                            return (
                                <li key={index}>{ item }</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Cart;
