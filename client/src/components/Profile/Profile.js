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
        const index = this.state.index + 1
        this.setState({
            index,
            user
        })
    }

    render() {
        return(
            <div className={css.component}>
                <div className="layer" style={{backgroundColor: this.props.layerColor}}></div>
                <div className="formContainer">
                    <div className="formContainer__title">
                        <h3>Dites-nous en plus</h3>
                    </div>
                    <div className="form">
                        <Form getUserInfo={this.props.getUserInfo} formStep={this.props.formStep} scrollSection={this.props.scrollSection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile