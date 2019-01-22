import React from 'react'
import UserInfo from './steps/UserInfo'
import content from '../../../content/content'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            age: '',
            gender: '',
        }
    }

    nextStep = () => {
        const step = this.state.step + 1
        this.setState({
            step
        })
    }

    render() {
        return <UserInfo
                    nextStep={this.nextStep}
                    //handleChange = {this.handleChange}
                    //values={values}
                />

    }
}

export default Form
