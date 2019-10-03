import React, { useState } from 'react';
import styled from 'styled-components';
import { themed, elevation as AkElevations } from '@atlaskit/theme';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';

const Card = styled.div`
    ${({ elevation }) => AkElevations[elevation]}
    background-color: ${() => themed({ light: 'white', dark: '#283447' })};
    border-radius: 3px;
    margin-bottom: 2em;
    maring-top: 5em;
    min-width: 240px;
    text-align: left;
    display: flex;
    flex-direction: row;
`;

const Background = styled.div`
    background-image: url(https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);
    width: 15%;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Content = styled.div`

    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    text-align: left;

    .title {
        font-size: 1.6rem;
        font-weight: 700;
        color: #292929;
        line-height: 1.1;
    }

    .description {
        font-size: 1;
        font-weight: 100;
        color: #292929;
        line-height: 1.5;
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: 2em;
`;

function AssignmentItem(props) {
    return (
        <div>
                <Card elevation="e100">
                    <Background />
                    <Page>
                        <Grid spacing="cosy">
                            <GridColumn medium={8}>
                                <Content>
                                    <h1 className="Title">Introduction to HTML</h1>
                                    <p className="description">Learn about the history of HTML and how to write HTML documents</p>
                                </Content>
                            </GridColumn>

                        </Grid>
                    </Page>
                    <Actions>
                        <Button appearance="primary">Join</Button>
                    </Actions>
            </Card>
        </div>
    );
}

export default AssignmentItem;