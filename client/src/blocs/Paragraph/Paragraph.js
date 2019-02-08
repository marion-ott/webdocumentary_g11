import React from 'react'
import css from './paragraph.scss'
import Subtitle from './Subtitle/Subtitle'

class Paragraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cookies: this.props.cookies
        }
    }


    render() {
        //console.log(this.props)
        return(
            <div id="paragraph" className={css.component}>
                <p className={`paragraph ${this.props.className}`} style={{color: this.props.txtColor}} dangerouslySetInnerHTML={{__html: `${this.props.paragraph} <strong>${this.props.name ? this.props.name : ''}</strong>`}}></p>
                { this.props.subtitle ? <Subtitle subtitle={this.props.subtitle}/> : false }
                { this.props.cookies ? <Subtitle cookies={this.props.cookies} index={this.props.index} subtitle={this.props.subtitle}/>  : false }
            </div>
        )
    }
}

export default Paragraph