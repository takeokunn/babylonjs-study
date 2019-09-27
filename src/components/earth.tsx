import * as React from 'react';

import EarthGame from "../game/earth";

interface Props {}

interface State {
    game: EarthGame | null;
}

export default class Earth extends React.Component<Props, State> {
    state = {
        game: null
    }
    startRender() {
        this.state.game.doRender();
    }
    stopRender() {
        this.state.game.stopRender();
    }
    componentDidMount() {
        const elem = document.getElementById("earth");
        elem.onwheel = function(event){
            event.preventDefault();
        };
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        this.state.game = new EarthGame("earth", canvasSize)
        this.state.game.createScene();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Earth</h3>
                            <p>地球儀</p>
                            <ul>
                                <li>
                                    <button className="button is-success" onClick={this.startRender.bind(this)}>start</button>
                                </li>
                                <li>
                                    <button className="button is-danger" onClick={this.stopRender.bind(this)}>stop</button>
                                </li>
                            </ul>
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
