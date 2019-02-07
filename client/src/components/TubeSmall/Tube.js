import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/tubeSmall.json'
import  './tube.scss'

const TubeSmall = () => (
  <Lottie
    options={{
      animationData: animation
    }}
  />
)

export default TubeSmall
