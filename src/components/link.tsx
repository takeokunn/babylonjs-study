import * as React from 'react';

interface Props {}

interface State {}

export default class Link extends React.Component<Props, State> {
    render() {
        return (
            <section id="link" className="section is-small">
                <div className="container">
                    <div className="header">
                        <h3 className="title is-3">Link</h3>
                    </div>
                    <div className="hero-buttons">
                        <a className="button is-link is-large" href="https://twitter.com/takeokunn" target="_blank">
                            <span className="icon">
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span>Twitter</span>
                        </a>
                        <a className="button is-black is-large" href="https://github.com/takeokunn/babylonjs-study" target="_blank">
                            <span className="icon">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
