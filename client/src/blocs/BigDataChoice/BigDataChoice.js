import React from 'react'
import css from './bigDataChoice.scss'
import Particle from '../../components/BigDataPage/ParticleComponent'


class BigDataChoice extends React.Component {

    render() {
        return (
            <div className={css.component}>
                <Particle />
                <p>le big data ? c’est quoi ?</p>
                <a href="/big-data">découvrir</a>
            </div>
        );
    }
}

export default BigDataChoice
