import React from 'react'
import css from './title.scss'

class Title extends React.Component {
    render() {
        return(
            <div className={css.component}>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Title