import * as React from 'react';

interface Props {}

interface State {}

export default class Link extends React.Component<Props, State> {
    render() {
        return (
            <section id="link" className="section is-small">
                <div className="container">
                    <div className="header">
                        <h3 className="title is-3">About Babylon.js</h3>
                    </div>
                    <div className="hero-buttons">
                        <p>
                            Babylon.jsは、HTML 5を介してWebブラウザに3Dグラフィックを表示するためのJavaScriptライブラリを使用したリアルタイム3Dエンジンです。
                            <br />
                            ソースコードはGitHubで入手でき、Apache License 2.0の下で配布されています。
                            <br />
                            XBoxのゲーム, WebVRの開発などもすることができる。
                            <br />
                            TypeScriptで開発されているので、型定義しっかりすることができる。
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
