// Dialog 组件
import React from 'react'
import './dialog.css'

class Dialog extends React.Component {

    render() {

        let footer = (
            <footer>
                <button onClick={this.sure}>确定</button>
                <button onClick={this.cancel}>取消</button>
            </footer>
        )
        
        if (this.props.footer) {
            footer = this.props.footer
        }

        return (
            <div className="box">
                <header>{ this.props.title }</header>

                <section className="wrap">
                    { this.props.children || '我是 dialog 默认内容' }
                </section>
                { footer }
            </div>
        )
    }

    /**
     * sure
     */
    sure(e) {
        // console.log(e.target)
        let el = e.target
        el.setAttribute('class', 'activeTab')
        e.target.nextElementSibling.removeAttribute('class')
    }

    /**
     * cancel
     */
    cancel(e) {
        let el = e.target
        el.setAttribute('class', 'activeTab')
        e.target.previousElementSibling.removeAttribute('class')
    }
}

export default Dialog
