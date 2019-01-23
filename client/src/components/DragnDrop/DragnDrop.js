import React from 'react'
import css from './dragndrop.scss'
// import DragnDrop from '../../bloc/DragnDrop/DragnDrop'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'


class DragnDrop extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          canvas : document.getElementsById('drag-area'),
          context : canvas.getContext('2d'),
          items : [],
          mouse : {
              clicked : false,
              x : 0,
              y : 0,
              currentlyHeldItem : null
          }
      }
    }

    // const canvas = document.getElementsById('drag-area');
    // const context = canvas.getContext('2d');

    // let items = []
    // let mouse = {
    //     clicked : false,
    //     x : 0,
    //     y : 0,
    //     currentlyHeldItem : null
    // }

    // addRectangle = (x = 0, y = 0, width = 10, height = 10, color) => {
    //   let rectangle = {
    //     x: x,
    //     y: y,
    //     width: width,
    //     height: height,
    //     color: color
    //   }
    //
    //   items.push(rectangle)
    // }
    //
    // addRectangle(40, 40, 200, 200, "#ff6b95")

    this.canvas.addEventListener('mousedown', ({ offsetX, offsetY }) => {
        mouse.clicked = true

        let item = findTopItem(offsetX, offsetY)
        if (item) {
            putItemOnTop(item)
            mouse.currentlyHeldItem = item
        }
    })

    canvas.addEventListener('mouseup', _ => {
        mouse.clicked = false
        mouse.currentlyHeldItem = null
    })

    canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
        if (mouse.clicked && mouse.currentlyHeldItem) {
            mouse.currentlyHeldItem.x += offsetX - mouse.x
            mouse.currentlyHeldItem.y += offsetY - mouse.y
        }

        mouse.x = offsetX
        mouse.y = offsetY

    })

    const findTopItem = (x, y) => items.filter(item => isInBounds(x, y, item)).pop()

    const isInBounds = (x, y, item) => x > item.x && x< item.x + item.width && y > item.y && y < item.y + item.height

    function putItemOnTop (item) {
      items.splice(items.indexOf(item), 1)
      items.push(item)
    }

    function render () {
      context.clearRect(0, 0, canvas.width, canvas.height)

      items.forEach(element => {
        context.beginPath()
        context.rect(element.x, element.y, element.width, element.height)
        context.fillStyle = element.color
        context.fill()
      })
    }

    setInterval(_ => render(), 1000 / 60)


    render() {
        return(
            <div className={css.component}>
                <canvas id="drag-area"></canvas>
            </div>
        )
    }
}

export default DragnDrop
