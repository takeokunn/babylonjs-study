import * as React from 'react';

import RenderingGame from "../game/rendering";

interface Props {}

interface State {
    isStart: Boolean;
    game: RenderingGame | null;
}

export default class Rendering extends React.Component<Props, State> {
    state = {
        isStart: false,
        game: null
    }
    startRender() {
        this.setState({ isStart: true });
        this.state.game.createScene();
        this.state.game.doRender();
    }
    doRender() {
        this.state.game.doRender();
    }
    stopRender() {
        this.state.game.stopRender();
    }
    componentDidMount() {
        const elem = document.getElementById("rendering");
        elem.onwheel = function(event){
            event.preventDefault();
        };
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        this.state.game = new RenderingGame("rendering", canvasSize)
        this.state.game.createScene();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">HDRTexture</h3>
                            <p>HDRという形式の背景テクスチャを貼り付けたサンプル。</p>
                            <p><a href="https://github.com/takeokunn/babylonjs-study/blob/master/src/game/rendering.ts" target="_blank">ソースコード</a></p>
                            <ul>
                                { !this.state.isStart && (<li><button className="button is-primary" onClick={this.startRender.bind(this)}>start</button></li>) }
                                { this.state.isStart && (<li><button className="button is-success" onClick={this.doRender.bind(this)}>do</button></li>) }
                                { this.state.isStart && (<li><button className="button is-danger" onClick={this.stopRender.bind(this)}>stop</button></li>) }
                            </ul>
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
