import React from 'react';
import Lottie from 'lottie-react-web'
import animation from '../../content/tubeForm2.json'
import  './tube.scss'

const TubeForm = () => (
  <Lottie
    options={{
      animationData: animation
    }}
  />
)

export default TubeForm
