import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/bubble.json'
import  './ourBubble.scss'

const Tube = () => (
  <Lottie
    options={{
      animationData: animation
    }}
  />
)

export default Tube
