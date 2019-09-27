import * as React from 'react';

interface Props {}

interface State {}

export default class Technology extends React.Component<Props, State> {
    render() {
        return (
            <section id="technology" className="section is-small is-light">
                <div className="container">
                    <div className="header">
                        <h3 className="title is-3">Technology</h3>
                        <h4 className="subtitle is-4">使用技術やライブラリについて</h4>
                    </div>
                    <div className="item-focus">
                        <div className="columns">
                            <div className="column">
                                <a href="https://www.babylonjs.com/" target="_blank">
                                    <img alt="babylon" src="./img/babylonjs.png"/>
                                </a>
                                <p>BabylonJS</p>
                            </div>
                            <div className="column">
                                <a href="https://www.typescriptlang.org/" target="_blank">
                                    <img alt="typescript" src="./img/typescript.png"/>
                                </a>
                                <p>TypeScript</p>
                            </div>
                            <div className="column">
                                <a href="https://webpack.js.org/" target="_blank">
                                    <img alt="webpack" src="./img/webpack.png"/>
                                </a>
                                <p>Webpack</p>
                            </div>
                            <div className="column">
                                <a href="https://ja.reactjs.org/" target="_blank">
                                    <img alt="react" src="./img/react.png"/>
                                </a>
                                <p>React</p>
                            </div>
                            <div className="column">
                                <a href="https://bulma.io/" target="_blank">
                                    <img alt="bulma" src="./img/bulma.png"/>
                                </a>
                                <p>Bulma</p>
                            </div>
                            <div className="column">
                                <a href="https://circleci.com/gh/takeokunn/workflows/babylonjs-study" target="_blank">
                                    <img alt="circleci" src="./img/circleci.png"/>
                                </a>
                                <p>CircleCI</p>
                            </div>
                            <div className="column">
                                <a href="https://github.com/takeokunn/babylonjs-study" target="_blank">
                                    <img alt="circleci" src="./img/github.png"/>
                                </a>
                                <p>GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
