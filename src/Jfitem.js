import React from 'react'

class Jfitem extends React.Component {
 
    render() {
        const { text, del } = this.props
        return (
           
                <li onClick={del}>
                    { text }
                </li>
            
        )
    }

    
}

export default Jfitem
