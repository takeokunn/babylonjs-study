import * as React from 'react';

import WaterGame from "../game/water";

interface Props {}

interface State {}

export default class Water extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("water");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new WaterGame("water", canvasSize)
        game.createScene();
        game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Water</h3>
                            <p></p>
                        </div>
                        <div className="column is-8">
                            <canvas id="water"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
