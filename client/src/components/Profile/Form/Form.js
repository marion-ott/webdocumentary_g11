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
            step: 1,
            firstName: '',
            lastName: '',
            gender: '',
            services: [],
            images: []
        }
    }

    handleChange = input => event => {
        console.log();
        
        this.setState({ [input] : event.target.value }, () => console.log(this.state))
    }

    nextStep = () => {
        const step = this.state.step + 1
        this.setState({
            step
        })
    }

    render() {
        const step = this.state.step
        const cookies = content.data[2].cookies
        const images = content.data[3].form.images
        
        switch(step) {
            case 1:
                return <UserInfo 
                            nextStep={this.nextStep} 
                            handleChange = {this.handleChange}
                            //values={values}
                        />
            case 2:
                return <ServicesDetails 
                            nextStep={this.nextStep}
                            cookies={cookies}
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