import React, { useState } from 'react';
import styled from 'styled-components';
import { themed, elevation as AkElevations } from '@atlaskit/theme';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';

const Box = styled.div`
${({ elevation }) => AkElevations[elevation]}
background-color: ${() => themed({ light: 'white', dark: '#283447' })};
border-radius: 3px;
margin-bottom: 2em;
maring-top: 5em;
min-width: 240px;
padding: 16px 24px;
text-align: left;

display: flex;
flex-direction: column;
`;

const Card = styled.div`
align-items: left;
justify-content: left;
display: flex;
flex-direction: column;
`;

const Background = styled.div`
background: #fea;
background-image: url(https://via.placeholder.com/150);
background-repeat: no-repeat;
`;

const Description = styled.div`
align-items: left;
justify-content: left;
display: block;
font-size: 1rem;
font-weight: 400;
color: #292929;
line-height: 1.5;
margin-block-start: .5em;
margin-block-end: .5em;
`;

const Status = styled.div`
  text-align: right;
`;

const Title = styled.div`
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
    color: #292929;
    line-height: 1.1;

`;

const Tasks = styled.div`
    text-align: left;
    font-size: 1.6rem;
    font-weight: 500;
    color: #292929;
    line-height: 1.1;
`;

const Actions = styled.div`
    text-align: right;
`;

function AssignmentItem(props) {
    return (
        <div>
            <Card>
                <Box elevation="e100">
                    <Page>
                        <Background />
                        <Grid spacing="cosy">
                            <GridColumn medium={8}>
                                <Title>Personal Statement</Title>
                                <Description>We'd like to understand a bit about you! You'll write a short personal statement, and take a short quiz to test your computational knowledge.</Description>
                            </GridColumn>
                            <GridColumn medium={4}>
                                <Status>status: <Lozenge appearance="success">completed</Lozenge></Status>
                            </GridColumn>
                        </Grid>
                        <Tasks>Tasks</Tasks>
                        <ul>
                            <Grid>
                                <GridColumn medium={6}>
                                    <li>Do this</li>
                                    <li>Do that</li>
                                </GridColumn>
                                <GridColumn medium={6}>
                                    <li>And this</li>
                                    <li>And that</li>
                                </GridColumn>
                            </Grid>
                        </ul>
                    </Page>
                    <Actions>
                        <Button appearance="primary">Start!</Button>
                    </Actions>
                </Box>
            </Card>
        </div>
    );
}

export default AssignmentItem;