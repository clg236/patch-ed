import React, { Component } from 'react';
import Icon from '@atlaskit/icon';

const patchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 51">
        <defs />
        <g fill="none" fill-rule="evenodd">
            <text fill="#C7FFF9" font-family="Ratio-Bold, Ratio" font-size="72" font-weight="bold" letter-spacing="1.922" transform="translate(-5 -4)">
                <tspan x=".534" y="55">P</tspan>
            </text>
            <text fill="#00C0FF" font-family="Ratio-Bold, Ratio" font-size="72" font-weight="bold" letter-spacing="1.922" transform="translate(-5 -4)">
                <tspan x="4.534" y="53">P</tspan>
            </text>
        </g>
    </svg>
);

class PatchIcon extends Component<{}, {}> {
    render() {
        return <Icon glyph={patchIcon} label="App Lab" size="large" />;
    }
}

export default PatchIcon;



