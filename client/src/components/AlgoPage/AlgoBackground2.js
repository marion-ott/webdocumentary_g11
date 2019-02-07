import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import p5 from "p5";

export default function sketch (sketch){

  const body = document.querySelector('body');
  const field = document.querySelector('#field');

  // Fill the canvas to the window
  field.width = document.getElementById('field').offsetWidth ;
  field.height = document.getElementById('field').offsetHeight;

  const fps = 30;                              // Set the draw loop's framerate

  const size = 20;                             // Relative scale of the vectors (smaller = more)
  const inc = 0.1;                             // Distance to travel through noise
  let cols = Math.floor(field.width / size);   // Number of columns based on scaling
  let rows = Math.floor(field.height / size);  // Number of rows based on scaling
  let zoff = 0;

  // Setup function to kick off p5
  // TODO: Refactor using lighter libraries
  sketch.setup = () =>{
  	sketch.createCanvas(field.width, field.height);
  }

  // Ensure the visualization stays the size of the window
  sketch.windowResized = () => {
    sketch.resizeCanvas(body.clientWidth, body.clientHeight);

    // Recalculate columns and rows based on new size
    cols = Math.floor(body.clientWidth / size);
    rows = Math.floor(body.clientHeight / size);
  }

  // Draw function
  sketch.draw = () => {

  	let yoff = 0;                            // Kick off the y-axis

  	sketch.background(255, 255, 255);                 // Draw background

  	// Loop cells by:
  	// For each row,
  	// For each column within the row,
  	// Create and draw a euclidian vector

  	for (let y = 0; y <= rows; y++) {

  		let xoff = 0;                          // Kick off the x-axis

  		for (let x = 0; x <= cols; x++) {

  			const index  = (x + y * field.width) * 4;

  			// Use the Perlin Noise generator to get a 'random' value for each vector
  			const angle = sketch.noise(xoff, yoff, zoff) * (Math.PI * 2);

  			// Create the vector using angle as the start angle
        const vector = p5.Vector.fromAngle(angle);
  			// const vector = sketch.createVector(angle);

  			sketch.stroke(0, 0, 255);              // Style and apply a stroke

  			sketch.push();                            // Isolate drawing context (via p5)

  			sketch.translate(x * size, y * size);     // Move to the corner of each cell
  			sketch.rotate(vector.heading());          // Rotate the line based on the vector's angle
  			sketch.line(0, 0, size, 0);               // Draw a line from the corner that is as long as the cell

  			sketch.pop();                             // Restore drawing conext (via p5)

  			xoff += inc;                       // Move through the x-axis of the noise
  		}

  		yoff += inc;                         // Move through the y-axis of the noise
  		zoff += inc / 100;                   // Move through the z-axis of the noise (simulates time)
  	}
  }
}
