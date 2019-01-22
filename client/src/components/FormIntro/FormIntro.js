import React from 'react'
import css from './formIntro.scss'
import Form from './Form/Form'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'


class FormIntro extends React.Component {
    render() {
        return(
            <div className={css.component}>
                <div className="formContainer">
                    <div className="formContainer__title">
                        <h3>Dites-nous tout...</h3>
                    </div>
                    <div className="form">
                        <Form />
                    </div>
                </div>
            </div>
        )
    }
}

export default FormIntro
