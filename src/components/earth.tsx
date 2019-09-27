import * as React from 'react';

import EarthGame from "../game/earth";

interface Props {}

interface State {}

export default class Earth extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("earth");
        elem.onwheel = function(event){
            event.preventDefault();
        };
        // elem.onmousewheel = function(event){
            // event.preventDefault();
        // };

        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new EarthGame("earth", canvasSize)
        game.createScene();
        game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Earth</h3>
                            <p>地球儀</p>
                        </div>
                        <div className="column is-8">
                            <canvas id="earth"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
