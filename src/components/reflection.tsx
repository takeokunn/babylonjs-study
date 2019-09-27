import * as React from 'react';

import ReflectionGame from "../game/reflection";

interface Props {}

interface State {}

export default class Reflection extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("reflection");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new ReflectionGame("reflection", canvasSize)
        // game.createScene();
        // game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Reflection</h3>
                            <p></p>
                        </div>
                        <div className="column is-8">
                            <canvas id="reflection"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
