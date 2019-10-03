import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import AssignmentItem from '../components/AssignmentItem';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import styled from 'styled-components';


const Description = styled.div`
align-items: left;
justify-content: left;
display: block;
font-size: 1rem;
font-weight: 400;
color: #292929;
line-height: 1.5;
margin-bottom: 2em;
`;

const Wrapper = styled.div`
margin-top: 5em;
`;

export default class AssignmentsPage extends Component {
    render() {
        return (
            <Wrapper>
                <Page>
                    <Grid>
                        <GridColumn>
                            <PageTitle>Assignments</PageTitle>
                            <Description>
                                Here's a page description.
                            </Description>
                            <AssignmentItem />
                            <AssignmentItem />
                        </GridColumn>
                    </Grid>
                </Page>
            </Wrapper>

        );
    }
}