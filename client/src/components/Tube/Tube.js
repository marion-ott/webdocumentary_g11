import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from '../../content/data.json'
import css from './tube.scss'
 
const Tube = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
 
  return (
    <div className={css.component}>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}
 
export default Tube