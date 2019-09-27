import * as React from 'react';

import Top from "./top";
import Technology from "./technology";

import Earth from "./earth";
import Physics from "./physics";
import Reflection from "./reflection";
import Rendering from "./rendering";
import Sandbox from "./sandbox";
import Video from "./video";
import Water from "./water";

import Link from "./link";

interface Props {}

interface State {}

export default class Index extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Top />
                <Link />
                <Technology />
                <Earth />
                <Physics />
                <Reflection />
                <Rendering />
                <Sandbox />
                <Video />
                <Water />
            </div>
        )
    }
}
