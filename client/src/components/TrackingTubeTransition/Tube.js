import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/trackingtransition.json'
import  './tube.scss'

const TubeTransition = () => (
  <Lottie
    options={{
      animationData: animation,
      loop: false
    }}
  />
)

export default TubeTransition
