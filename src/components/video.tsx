import * as React from 'react';

import VideoGame from "../game/video";

interface Props {}

interface State {}

export default class Video extends React.Component<Props, State> {
    componentDidMount() {
        const elem = document.getElementById("video");
        const canvasSize: CanvasSize = {
            width: elem.clientWidth,
            height: elem.clientHeight
        };
        const game = new VideoGame("video", canvasSize)
        // game.createScene();
        // game.doRender();
    }
    render() {
        return (
            <section id="babylon" className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <h3 className="title is-3">Video</h3>
                            <p></p>
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
