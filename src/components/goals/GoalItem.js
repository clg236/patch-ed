import React, { useState } from 'react';
import styled from 'styled-components';
import { themed, elevation as AkElevations } from '@atlaskit/theme';
import Button from '@atlaskit/button';

const Card = styled.div `
    ${({ elevation }) => AkElevations[elevation]}
    background-color: ${() => themed({ light: 'white', dark: '#283447' })};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 3px;
    width: 30vw;
    margin-bottom: 15px;
    margin-right: 15px;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    border-top: 2px solid white;
    margin-bottom: 15px;
`;

const CardTitle = styled.h1`
    font-size: 1em;
    margin: 0;
    padding-top: 10px;
    padding-left: 15px;
    flex-grow: 2;
`;

const CardSubtitle = styled.p`
    font-size: .8em;
    padding-left: 15px;
    margin: 0;
`;

const CardDescription = styled.div`
    font-size: 1em;
    padding-left: 15px; 
    padding-bottom: 10px;  
`

const Progress = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: flex-start;
    font-size: .6em;
    color: salmon;
    padding-right: 10px;  
    margin-top: 10px;  
    flex-grow: 1;
    text-align: right;
`;

const GoalsStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 5px;
    font-size: .8em;
    margin: 0;
`;

const CardImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    height: 6em;
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
            <CardHeader>
                <div>
                    <CardTitle>HTML</CardTitle>
                    <CardSubtitle>Master The basics of HTML</CardSubtitle> 
                </div>
                <Progress>50% completed</Progress>
            </CardHeader>  
                <CardDescription>Here's a description of what we're up to.</CardDescription>
                <Goals />
                <CardFooter>
                    <Button appearance="primary">Start!</Button>
                </CardFooter>
                
        </Card>
    );
}

function Goals() {
    return(
        <GoalsStyle>
            <Goal />
            <Goal />
            <Goal />
            <Goal />
        </GoalsStyle>

    );

}

function Goal() {
    return (
        <p>Goal!</p>
    );

}

export default GoalItem;