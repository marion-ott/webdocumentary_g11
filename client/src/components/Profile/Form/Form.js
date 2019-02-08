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
            formStep: 1,
            firstName: '',
            age: null,
            gender: '',
            services: [],
            images: [],
            errors: [],
            choiceAmount: 0,
            imageIndex: 0
        }
    }

    componentWillMount() {
        this.setState({
            formStep: this.props.formStep
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value }, () => this.checkInputs())
        //console.log(this.state)
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
    
    updateImageChoice = (el) => {
        const images = this.state.images
        if(this.state.imageIndex < 2) {
            this.updateImageIndex()
        }
        images.push(el)
        this.setState({
            images
        })
    }

    updateImageIndex = () => {
        this.setState({
            imageIndex: this.state.imageIndex + 1
        })
    }

    nextStep = () => {
        //const user = this.state
        //let user;
        //const test = Object.keys(this.state).filter(key => this.state[key] === '' || this.state[key] === null)
        //console.log(this.state)        
        this.props.getUserInfo(this.state, this.props.formStep)
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
        const images = content.data[6].formImages
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
                            getCookieInfo={this.props.getCookieInfo}
                            updateServices={this.updateServices}
                            cookies={cookies}
                            choiceAmount={this.state.choiceAmount}
                            scrollSection={this.props.scrollSection}
                        />
            case 3:
                return <ImageChoices 
                            updateImageIndex={this.updateImageIndex}
                            updateImageChoice={this.updateImageChoice}
                            imageIndex={this.state.imageIndex}
                            images={images[this.state.imageIndex]}
                            scrollSection={this.props.scrollSection}
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