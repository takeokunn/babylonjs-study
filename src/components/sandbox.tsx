import * as React from 'react';

import SandboxGame from "../game/sandbox";

interface Props {}

interface State {}

export default class Sandbox extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("sandbox");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new SandboxGame("sandbox", canvasSize)
        game.createScene();
        game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Sandbox</h3>
                            <p>一番シンプルなWebGLの実装。</p>
                        </div>
                        <div className="column is-8">
                            <canvas id="sandbox"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
