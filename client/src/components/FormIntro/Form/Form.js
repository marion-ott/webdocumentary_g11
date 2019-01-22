import React from 'react'
import UserInfo from './steps/UserInfo'
import ButtonNext from './steps/ButtonNext'
import content from '../../../content/content'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            age: '',
            gender: '',
            nextStep: false
        }
    }

    nextStep = () => {
        const inputs = document.getElementsByTagName('input');
        for ( let i = 0; i < inputs.length; i++) {
           if(inputs[i].value !== '') return true;
           this.setState({
               nextStep: true
           })
        }
        alert('Veuillez remplir tous les champs !');
        return false;
    }

    render() {
        return (
            <UserInfo
                nextStep={this.nextStep}
                //handleChange = {this.handleChange}
                //values={values}
                
            />
        )
    }
}

export default Form
