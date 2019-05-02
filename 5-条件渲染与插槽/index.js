import React from 'react'
import ReactDOM from 'react-dom'

import Dialog from './Dialog'

const msg = [1,2,3];
const Home = () => {
    
    return (
        <>
        { msg.length > 0 && <h1>Home</h1> }
        </>
    )
}

const About = () => {
    return (
        <h1>About</h1>
    )
}

const List = () => {
    return (
        <h1>List</h1>
    )
}

class Detail extends React.Component {
    constructor() {
        super()

        this.state = {
            curTab: 'title'
        }
    }
    render() {
        return (
            <>
                <h1>Detail----{ this.state.curTab }</h1>
                { this.props.children }
            </>
        )
    }
}



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            curTab: 'home',
            activeTab: ''
        }
    }

    render() {

        let curPanel = null;
        let { curTab } = this.state

        if (curTab === 'home') {
            curPanel = <Home username={msg}></Home>
        } else if (curTab === 'about') {
            curPanel = <About />
        } else {
            curPanel = <List />
        }
      
        return (
            <React.Fragment>
                <div>
                    <button onClick={() => { this.setState({ curTab: 'home' }) }}>Home</button>
                    <button onClick={() => { this.setState({ curTab: 'about' }) }}>About</button>
                    <button onClick={() => { this.setState({ curTab: 'list' }) }}>List</button>
                </div>

                <div>
                    {/* 分别有三个组件 */}
                    { curPanel }
                </div>

                <hr />

                <Detail>
                    <p>我是一个插槽内容--- { curTab } </p>
                </Detail>

                <Dialog title="标题"
                    // footer={ <footer>我是外部传递进来的 footer</footer> }
                >
                    <div>
                        我是外部的内容---hhhh
                    </div>

                    
                </Dialog>

            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)
