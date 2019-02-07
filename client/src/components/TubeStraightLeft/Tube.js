import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/tubeStraight.json'
import  './tube.scss'

const Tube = () => (
  <Lottie
    options={{
      animationData: animation
    }}
  />
)

export default Tube
