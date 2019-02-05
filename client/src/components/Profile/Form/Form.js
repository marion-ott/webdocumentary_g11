import React from 'react'
import UserInfo from './steps/UserInfo'
import ServicesDetails from './steps/ServicesDetails'
import ImageChoices from './steps/ImageChoices'
import Success from './steps/Success'
import content from '../../../content/content'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            age: null,
            gender: '',
            services: [],
            images: [],
            errors: [],
            choiceAmount: 0
        }
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value }, () => this.checkInputs())
    }

    checkInputs = () => {
        const emptyInputs = Object.keys(this.state).filter(key => this.state[key] === '' || this.state[key] === null)
        if(emptyInputs.length === 0) {
            return true
        } else {
            return false
        }
    }

    updateServices = (array) => {
        this.setState({
            services: array
        }, () => this.nextStep())
    }

    nextStep = () => {
        const user = this.state
        Object.keys(this.state).filter(key => this.state[key] === '' || this.state[key] === null)
        this.props.scrollSection()
        //this.props.getUserInfo(user)
    }

    handleErrors = array => {
        this.setState({
            errors: array
        })
    }

    render() {
        const step = this.props.formStep
        const cookies = content.data[2].cookies
        const images = content.data[3].form.images
        const buttonState = this.checkInputs()
        
        switch(step) {
            case 1:
                return <UserInfo 
                            nextStep={this.nextStep} 
                            handleChange={this.handleChange}
                            scrollSection={this.props.scrollSection}
                            buttonState={buttonState}
                        />
            case 2:
                return <ServicesDetails 
                            updateServices={this.updateServices}
                            cookies={cookies}
                            choiceAmount={this.state.choiceAmount}
                            //handleChange = {this.handleChange}
                            //values={values}
                        />
            case 3:
                return <ImageChoices 
                            nextStep={this.nextStep}
                            //values={values}
                            images={images}
                        />
            case 4:
                return <ImageChoices 
                            nextStep={this.nextStep}
                            //values={values}
                        />
            case 5:
                return <Success 
                            details={this.state}
                        />
            default:
                return <Success 
                            details={this.state} 
                        />
        }
    }
}

export default Form