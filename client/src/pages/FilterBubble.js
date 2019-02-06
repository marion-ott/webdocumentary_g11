import React from 'react'

// import filterBubble from './styles/filterBubble.scss'

import content from '../content/content'
import Text from '../components/Text/Text'
import MixElements from '../components/MixElements/MixElements'


class FilterBubble extends React.Component {
    render() {
        const data = content.data[7]
        return(
            <section>
              <Text
                title={data.FilterBubble[0].title}
                backgroundColor={data.FilterBubble[0].backgroundColor}
                txtColor={data.FilterBubble[0].textColor}
                className={data.FilterBubble[0].className}
                scrollSection={this.scrollSection}
              />
              <MixElements
                  backgroundColor={data.FilterBubble[1].backgroundColor}
                  blocks={data.FilterBubble[1].blocks}
                  paragraph={data.FilterBubble[1].text}
              />
            </section>
        )
    }
}

export default FilterBubble
