import React from 'react'
import content from '../content/content'
import BubbleCanvas from '../components/BubbleCanvas/BubbleCanvas'
import Text from '../components/Text/Text'
import MixElements from '../components/MixElements/MixElements';



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
                {/* <div className="bubble">
                    <Tube />
                </div> */}
                <Text
                    title={data.FilterBubble[0].title}
                    hasBlocks={false}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                    scrollSection={this.scrollSection}
                />
                <Text
                    paragraph={data.FilterBubble[1].text}
                    //backgroundColor={data.FilterBubble[0].backgroundColor}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
                <MixElements
                    blocks={data.FilterBubble[2].blocks}
                    color="black"
                    //data={this.state.data}
                    
                //   redirect={this.props.routerProps.history.push}
                //   redirectTo="/big-data"
                //   cta="Continuer"
                />

                <Text
                    paragraph={data.FilterBubble[3].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data.FilterBubble[4].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
                <Text
                    paragraph={data.FilterBubble[5].text}
                    txtColor={data.FilterBubble[0].txtColor}
                    className={data.FilterBubble[0].className}
                />
              <BubbleCanvas color="#333333" style={style}/>
            </section>
        )
    }
}

export default FilterBubble
