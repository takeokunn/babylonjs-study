import * as React from 'react';

import RenderingGame from "../game/rendering";

interface Props {}

interface State {}

export default class Rendering extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("rendering");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new RenderingGame("rendering", canvasSize)
        // game.createScene();
        // game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Rendering</h3>
                            <p></p>
                        </div>
                        <div className="column is-8">
                            <canvas id="rendering"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
