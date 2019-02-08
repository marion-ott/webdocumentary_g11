import React from 'react'
import css from './profile.scss'
import Form from './Form/Form'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1
        }
    }

    updateStep = (user) => {
       // const index = this.state.index + 1
        this.setState({
            user
        })
    }

    scrollSection = () => {
        //console.log("scrolling", window.innerHeight);
        window.scrollBy({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth"
        })
    }

    render() {
        return(
            <div className={css.component}>
                {/* {this.props.layerColor && (<div className="layer" style={{backgroundColor: this.props.layerColor}}></div>)} */}
                <div className="formContainer" style={{backgroundColor: this.props.backgroundColor}}>
                    <div className="formContainer__title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="form">
                        <Form getCookieInfo={this.props.getCookieInfo} getUserInfo={this.props.getUserInfo} formStep={this.props.formStep} scrollSection={this.scrollSection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile