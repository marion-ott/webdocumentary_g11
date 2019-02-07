import React from 'react'
import css from './bubbleCanvas.scss'

class BubbleCanvas extends React.Component {
    componentWillMount() {
        this.setState({
            canvasSize: { canvasWidth: 8, canvasHeight: 600 }
        })
    }
    componentDidMount() {
        const canvas = this.canvas
        const c = canvas.getContext('2d',);
        const colorProp = this.props.color 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = {
            x: 10,
            y: 10
        };

        window.addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init();
        });
        function getDistance(x1, y1, x2, y2) {
            let xDistance = x2 - x1;
            let yDistance = y2 - y1;

            return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
            )
        };

        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min - 1) + min);
        }

        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }

        function rotate(velocity, angle) {
            const rotateVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) - velocity.y * Math.cos(angle)
            };
            return rotateVelocities;
        }


        function resolveCollision(particle, otherParticle) {
            const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;

            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
                const angle = Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                const m1 = particle.mass;
                const m2 = otherParticle.mass;

                const u1 = rotate(particle.velocity, angle);
                const u2 = rotate(otherParticle.velocity, angle);

                const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * -1 * m2 / (m1 + m2), y: u2.y };

                const vFinal1 = rotate(v1, -angle);
                const vFinal2 = rotate(v2, -angle);

                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }
        // Objects
        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            }
            this.radius = radius;
            this.color = color;
            this.mass = 1;
            this.opacity = 0;

            this.update = particles => {
                this.draw();
                for (var i = 0; i < particles.length; i++) {
                    if (this === particles[i]) continue;
                    if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                        resolveCollision(this, particles[i]);
                    }
                }
                if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
                    this.velocity.x = -this.velocity.x;
                }
                if (this.y - this.radius <= 0 || this.y + this.radius >= window.innerHeight) {
                    this.velocity.y = -this.velocity.y;
                }
                // if (distance(mouse.x, mouse.y, this.x, this.y) < 100) {
                //     this.opacity += 1;
                // } else if (this.opacity > 0) {
                //     this.opacity -= 1;
                //     this.opacity = Math.max(0, this.opacity)
                // }
                this.x += this.velocity.x;
                this.y += this.velocity.y;
            };

            this.draw = () => {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.save();
                c.globalAlpha = this.opacity;
                c.fillStyle = this.color;
                c.fill();
                c.restore();
                c.strokeStyle = this.color;
                c.lineWidth = 5;
                c.stroke();
                c.closePath();
            };
        }
        // Implementation
        let particles;
        // particles = [];
        function init() {
            particles = [];
            for (let i = 0; i < 20; i++) {
                const color = colorProp;
                let radius, x, y

                if (window.innerWidth < 640) {                  
                     radius = Math.floor(Math.random() * 40);
                     x = randomIntFromRange(radius, canvas.width - radius);
                     y = randomIntFromRange(radius, canvas.height - radius);
                }else if(window.innerWidth < 840){
                    radius = Math.floor(Math.random() * 50);
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                }else {
                    
                    radius = Math.floor(Math.random() * 100);
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                }

                if (i !== 0) {
                    for (let j = 0; j < particles.length; j++) {
                        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                            x = randomIntFromRange(radius, canvas.width - radius);
                            y = randomIntFromRange(radius, canvas.height - radius);
                            j = 1;
                        }
                    }
                }
               
                particles.push(new Particle(x, y, radius, color));
            };
            //console.log(particles);
        }
        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
            particles.forEach(particle => {
                particle.update(particles);
            });
        }
        init();
        animate();

    }

    render() {
        return (
            <section className={css.component} style={this.props.style && this.props.style}>
                <div className="divGeneral">
                    <canvas className="canvaOne" ref={el => this.canvas = el} ></canvas>
                </div>
            </section>

        );
    }
}

export default BubbleCanvas;