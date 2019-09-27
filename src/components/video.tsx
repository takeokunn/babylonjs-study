import * as React from 'react';

import VideoGame from "../game/video";

interface Props {}

interface State {
    isStart: Boolean;
    game: VideoGame | null;
}

export default class Video extends React.Component<Props, State> {
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
                            <p>VideoTextureでmp4を適当なオブジェクトに貼り付けたサンプル。動画はyoutube-dlとffmpegでyoutubeの動画をDL&加工した。</p>
                            <ul>
                                { !this.state.isStart && (<li><button className="button is-primary" onClick={this.startRender.bind(this)}>start</button></li>) }
                                { this.state.isStart && (<li><button className="button is-success" onClick={this.doRender.bind(this)}>do</button></li>) }
                                { this.state.isStart && (<li><button className="button is-danger" onClick={this.stopRender.bind(this)}>stop</button></li>) }
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
