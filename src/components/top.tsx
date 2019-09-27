import * as React from 'react';

interface Props {}

interface State {}

export default class Top extends React.Component<Props, State> {
  render() {
    return (
        <section id="top" className="fullscreen hero is-fullheight is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Babylon.js + TypeScriptで遊んでみた
                    </h1>
                    <h2 className="subtitle">
                        @takeokunn
                    </h2>
                </div>
            </div>
        </section>
    )
  }
}
