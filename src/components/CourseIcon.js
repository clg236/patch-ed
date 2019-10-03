import React, { Component } from 'react';
import Icon from '@atlaskit/icon';



function CourseIcon(props) {

    const courseName = props.courseName;

    const courseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 77">
            <defs />
            <g fill="none" fill-rule="evenodd">
                <text fill="#C700FF" font-family="Ratio-Bold, Ratio" font-size="100" font-weight="bold" letter-spacing="2.67" transform="translate(0 -1)">
                    <tspan x=".26" y="78">{props.chars}</tspan>
                </text>
                <text fill="#00F5FF" font-family="Ratio-Bold, Ratio" font-size="100" font-weight="bold" letter-spacing="2.67" transform="translate(0 -1)">
                    <tspan x="8.26" y="74">{props.chars}</tspan>
                </text>
            </g>
        </svg>
    );

    return <Icon glyph = {courseIcon} label = {courseName} size = "large" />
}

export default CourseIcon;