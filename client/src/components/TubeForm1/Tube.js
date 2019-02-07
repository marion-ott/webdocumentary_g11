import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/tubeForm1.json'
import  './tube.scss'

const Tube = () => (
  <Lottie
    options={{
      animationData: animation
    }}
  />
)

export default Tube
