import * as React from 'react';

import VideoGame from "../game/video";

interface Props {}

interface State {
    game: VideoGame | null;
}

export default class Video extends React.Component<Props, State> {
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
        const elem = document.getElementById("video");
        elem.onwheel = function(event){
            event.preventDefault();
        };
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        this.state.game = new VideoGame("video", canvasSize)
        this.state.game.createScene();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Video</h3>
                            <p></p>
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
                            <canvas id="video"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
