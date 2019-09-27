import * as React from 'react';

import PhysicsGame from "../game/physics";

interface Props {}

interface State {}

export default class Physics extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("physics");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new PhysicsGame("physics", canvasSize)
        // game.createScene();
        // game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Physics</h3>
                            <p>物理エンジン</p>
                        </div>
                        <div className="column is-8">
                            <canvas id="physics"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
