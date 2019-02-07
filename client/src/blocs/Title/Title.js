import React from 'react'
import css from './title.scss'

class Title extends React.Component {
    render() {
        let str = this.props.title
        let splitStr = str.split(' ')
        console.log(splitStr)
        return(
            <div className={css.component}>
                <h2 style={{color: this.props.txtColor}}>{this.props.title}</h2>
            </div>
        )
    }
}

export default Title
