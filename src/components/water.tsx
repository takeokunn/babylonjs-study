import * as React from 'react';

import WaterGame from "../game/water";

interface Props {}

interface State {
    isStart: Boolean;
    game: WaterGame | null;
}

export default class Water extends React.Component<Props, State> {
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
        const elem = document.getElementById("water");
        elem.onwheel = function(event){
            event.preventDefault();
        };
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        this.state.game = new WaterGame("water", canvasSize)
        this.state.game.createScene();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Water</h3>
                            <p>Babylon.jsが提供してるWaterShaderを使った。水面に木球を反射させ、また波があるように表現してみた。</p>
                            <ul>
                                { !this.state.isStart && (<li><button className="button is-primary" onClick={this.startRender.bind(this)}>start</button></li>) }
                                { this.state.isStart && (<li><button className="button is-success" onClick={this.doRender.bind(this)}>do</button></li>) }
                                { this.state.isStart && (<li><button className="button is-danger" onClick={this.stopRender.bind(this)}>stop</button></li>) }
                            </ul>
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
