import React from 'react'
import css from './title.scss'

class Title extends React.Component {
    render() {
        let str = this.props.title
        let splitStr = str.split(' ')
        //console.log(splitStr)
        return(
            <div className={css.component}>
                <span className="la">{splitStr[0]}</span>
                <span className="bulle">{splitStr[1]}</span>
                <span className="de">{splitStr[2]}</span>
                <span className="filtres">{splitStr[3]}</span>
            </div>
        )
    }
}

export default Title
