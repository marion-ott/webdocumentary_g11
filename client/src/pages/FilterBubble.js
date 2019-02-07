import React from 'react'
import BubbleCanvas from '../components/BubbleCanvas/BubbleCanvas'
import content from '../content/content'
import Text from '../components/Text/Text'
import MixElements from '../components/MixElements/MixElements'


class FilterBubble extends React.Component {
    render() {
        const data = content.data[7]
        console.log(data.FilterBubble[0].title)
        const style = {
            backgroundColor: "#000000",
            position: "fixed"
        }

        return(
            <section>
                <Text
                    title={data.FilterBubble[0].title}
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
                <BubbleCanvas color="#333333" style={style}/>
            </section>
        )
    }
}

export default FilterBubble
