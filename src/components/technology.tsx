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
                                <a href="https://www.babylonjs.com/">
                                    <img alt="babylon" src="./img/babylonjs.png"/>
                                </a>
                                <p>babylonjs</p>
                            </div>
                            <div className="column">
                                <a href="https://www.typescriptlang.org/">
                                    <img alt="typescript" src="./img/typescript.png"/>
                                </a>
                                <p>typescript</p>
                            </div>
                            <div className="column">
                                <a href="https://webpack.js.org/">
                                    <img alt="webpack" src="./img/webpack.png"/>
                                </a>
                                <p>webpack</p>
                            </div>
                            <div className="column">
                                <a href="https://ja.reactjs.org/">
                                    <img alt="react" src="./img/react.png"/>
                                </a>
                                <p>react</p>
                            </div>
                            <div className="column">
                                <a href="https://bulma.io/">
                                    <img alt="bulma" src="./img/bulma.png"/>
                                </a>
                                <p>bulma</p>
                            </div>
                            <div className="column">
                                <a href="http://circleci.com">
                                    <img alt="circleci" src="./img/circleci.png"/>
                                </a>
                                <p>circleci</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
