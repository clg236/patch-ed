import React, { useState } from 'react';
import styled from 'styled-components';
import { themed, elevation as AkElevations } from '@atlaskit/theme';
import Button from '@atlaskit/button';

const Card = styled.div `
    ${({ elevation }) => AkElevations[elevation]}
    background-color: ${() => themed({ light: 'white', dark: '#283447' })};
    border-radius: 3px;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;    
    margin-right: 1em;
`;

const CardContent = styled.div`
    height: 45%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 0.8em;

    .module {
        font-size: .8em;
    }

    .description {
        font-size: .9em;
        margin-bottom: 1em;
    }
`;

const CardImage = styled.div`
    background-image: url(https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);
    height: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 1em;
`;

const CardFooter = styled.div`
    margin-top: 2em;
    margin-bottom: 1em;
    display: box;
    text-align: right;
    margin-right: 1em;
    `;


function GoalItem() {

    return (
        <Card elevation="e100">
            <CardImage />
            <CardContent>
                <p className="module">The Basics of Web Development</p>
                <h3>HTML and CSS</h3>
                <p className="description">Mastery of HTML and CSS is an important prerequisite to being able to develop web applications. Take this challenge to prove yourself worthy of the title: <strong>HTML Guru</strong></p>
            </CardContent>
            <CardFooter>
                <Button appearance="primary">Start!</Button>
            </CardFooter>
        </Card>
    );
}

export default GoalItem;