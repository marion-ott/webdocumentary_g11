import React from "react";

class TrackingBackground extends React.Component {

    componentDidMount() {
        const canvas = document.getElementById('trackingBackground')
        let ctx = canvas.getContext('2d')

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.onresize = resize;

        function noise(ctx) {

            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                idata = ctx.createImageData(w, h),
                buffer32 = new Uint32Array(idata.data.buffer),
                len = buffer32.length,
                i = 0;

            for(; i < len;)
                buffer32[i++] = ((255 * Math.random())|0) << 24;

            ctx.putImageData(idata, 0, 0);
        }

        var toggle = true;

        // added toggle to get 30 FPS instead of 60 FPS
        (function loop() {
            toggle = !toggle;
            if (toggle) {
                requestAnimationFrame(loop);
                return;
            }
            noise(ctx);
            requestAnimationFrame(loop);
        })();

        // //TEXT QUI DEFILE
        // function defileText(){
        //     const title = document.getElementById('titleTracking')
        //     let position = 0;
        //     let msg = "VOTRE TEXTE DEFILANT";
        //     let msg = "     " + msg;
        //     var longue = msg.length;
        //     var fois = (70/msg.length) + 1;
        //
        //     for( i = 0; i <= fois; i ++) msg += msg;
        //
        //     function textdefil() {
        //         title.value=msg.substring(position,position+70);
        //         position++;
        //         if(position == longue) position=0;
        //         setTimeout("textdefil()",100);
        //     }
        //     window.onload = textdefil;
        // }
        //
        // defileText()

    }

    render() {
        return(
          <div>
            <canvas id="trackingBackground"/>
          </div>
        )
    }

}

export default TrackingBackground
