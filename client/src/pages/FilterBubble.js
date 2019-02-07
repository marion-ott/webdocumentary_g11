import React from 'react'

import Tube from '../components/OurBubble/OurBubble'
import content from '../content/content'
import BubbleCanvas from '../components/BubbleCanvas/BubbleCanvas'
import Text from '../components/Text/Text'



class FilterBubble extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const data = content.data[8]
        const style = {
            backgroundColor: "#000000",
            position: "fixed"
        }

        return(
            <section className="filterBubble">
                <div className="bubble">
                    <Tube />
                </div>
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
                    paragraph={data.FilterBubble[1].text}
                    blocks={data.FilterBubble[2].blocks}
                />
                <Text
                    paragraph={data.FilterBubble[2].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data.FilterBubble[3].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
              <BubbleCanvas color="#333333" style={style}/>
            </section>
        )
    }
}

export default FilterBubble
