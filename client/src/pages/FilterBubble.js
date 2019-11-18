import React from 'react'
import content from '../content/content'
import BubbleCanvas from '../components/BubbleCanvas/BubbleCanvas'
import Text from '../components/Text/Text'
import MixElements from '../components/MixElements/MixElements';
import Tube from '../components/OurBubble/OurBubble'


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
        const profiles = content.data[10].profils
        
        
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
                <Text
                    info={localStorage.getItem('services').split(',')}
                    paragraph={profiles[0].text}
                    hasBlocks={true}
                    blocks={profiles[0].blocks}
                    txtColor="white"
                    cta="continuer"
                    redirect={this.props.history.push}
                    redirectTo="/end/#"
                />
                
              <BubbleCanvas color="#333333" style={style}/>
            </section>
        )
    }
}

export default FilterBubble


{/* <Text
                        ref={(el) => el && this._blocks.push(el)}
                        title={content.data[1].step[1].title}
                        paragraph={content.data[1].step[1].text}
                        subtitle={content.data[1].step[1].subtitle}
                        cta={content.data[1].step[1].cta}
                        hasBlocks={true}
                        videoTitle={content.data[1].step[1].blocks[1].title}
                        videoSrc={content.data[1].step[1].blocks[1].src}
                        backgroundColor={content.data[1].step[1].backgroundColor} 
                        txtColor={content.data[1].step[1].txtColor} 
                        className={content.data[1].step[1].className} 
                        blocks={content.data[1].step[1].blocks}
                        scrollSection={this.props.scrollSection}
                        // redirect={this.props.routerProps.history.push}
                        // redirectTo="/algorithms"
                    /> */}