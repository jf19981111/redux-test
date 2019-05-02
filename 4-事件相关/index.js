import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor() {
        super()

        this.state = {
            hello: 'hello'
        }
        this.handelClick = this.handelClick.bind(this)
    }
    render () {
        return (
            // <form>
            <>
                <input type="text" />

                <p>{ this.state.hello }</p>

                <button onClick={(e) => { this.handelClick(e,'hello') }}>提交</button>
                {/* <button onClick={this.handelClick.bind(null, 'hello')}>提交</button> */}
            </>
            // </form>
        )
    }

    handelClick(e,str) {
        console.log(str)
        e.preventDefault();
        console.log(this)
        this.setState(() => ({
            hello: 'zhangsan'
        }))
    }
}


ReactDOM.render (
    <App />,
    document.getElementById('root')
)
