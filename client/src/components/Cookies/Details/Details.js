import React, { Component } from 'react';

class Details extends Component {
    render() {
        const choices = this.props.choices;
        return(
            <div>
                { choices.map((choice, key) => {
                        return(
                            <div key={key}>
                                <h4>{choice.name}</h4>
                                { choice.cookies.map((cookie, key) => {
                                    return <p key={key}>{ cookie.title } : { cookie.amount }</p>
                                }) 
                                }
                            </div>
                        )
                    })  
                }
            </div>
        )
    }
}

export default Details;