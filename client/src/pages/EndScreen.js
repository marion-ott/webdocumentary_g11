import React from 'react'
import Text from '../components/Text/Text'
import content from '../content/content'

class EndScreen extends React.Component {
    constructor() {
        super()
        this._blocks = []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const data = content.data
        return(
            <section className="ending">
                <Text
                    paragraph={data[9].conclusion[0].text}
                    txtColor="white"
                    backgroundColor="black"
                    // // className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data[9].conclusion[1].text}
                    txtColor="white"
                    backgroundColor="black"
                    // // className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data[9].conclusion[2].text}
                    txtColor="white"
                    backgroundColor="black"
                    // // className={data.FilterBubble[0].className}
                />
            </section>
        )
    }
}

export default EndScreen
