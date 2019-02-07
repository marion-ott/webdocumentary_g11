import React from 'react'

import Tube from '../components/OurBubble/OurBubble'
import content from '../content/content'

import BubbleCanvas from '../components/BubbleCanvas/BubbleCanvas'
import Text from '../components/Text/Text'
import MixElements from '../components/MixElements/MixElements'
import ScrollSymbol from '../blocs/ScrollSymbol/ScrollSymbol';


class FilterBubble extends React.Component {
    render() {
        const data = content.data[8]
        const style = {
            backgroundColor: "#000000",
            position: "fixed"
        }

        return(
            <section className="filterBubble">
                {/* <Tube /> */}
                <Text
                    title={data.FilterBubble[0].title}
                    hasBlocks={false}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                    scrollSection={this.scrollSection}
                />
                <Text
                    color="black"
                    txtColor={data.FilterBubble[0].txtColor}
                    hasBlocks={true}
                    paragraph={data.FilterBubble[2].text}
                    //backgroundColor={data.FilterBubble[1].backgroundColor}
                    blocks={data.FilterBubble[1].blocks}
                    paragraph={data.FilterBubble[1].text}
                />
                <Text
                    paragraph={data.FilterBubble[2].text}
                    //backgroundColor={data.FilterBubble[0].backgroundColor}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data.FilterBubble[3].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
              <BubbleCanvas color="#fff" style={style}/>
            </section>
        )
    }
}

export default FilterBubble
