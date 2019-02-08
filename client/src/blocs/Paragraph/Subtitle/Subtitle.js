import React from 'react'
import content from '../../../content/content'
import { p } from 'gsap/RoundPropsPlugin';

class Subtitle extends React.Component {


    findCookie1 = (cookie) => {
        return cookie.name === this.props.cookies[0];
    }
    findCookie2 = (cookie) => {
        return cookie.name === this.props.cookies[1];
    }
    findCookie3 = (cookie) => {
        return cookie.name === this.props.cookies[2];
    }
      
    render() {
        const cookiesData = content.data[2].cookies
        const cookies = []
        if(this.props.cookies) {
            cookies.push(cookiesData.find(this.findCookie1))
            cookies.push(cookiesData.find(this.findCookie2))
            cookies.push(cookiesData.find(this.findCookie3))
        }
        return(
            <div className={`subtitle subtitle${this.props.index}`}>{this.props.cookies && (
                cookies.map(cookie => (
                    <p className="paragraph">-- En naviguant sur le site <strong>{cookie.name}</strong>, vous êtes exposés à <strong>{cookie.cookies[5].total}</strong> cookies dont <strong>{cookie.cookies[5].amount}</strong> {cookie.cookies[5].text}.</p>
                ))
            )}</div>
        )
    }
}

export default Subtitle
