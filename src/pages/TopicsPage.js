import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import TopicItem from '../components/TopicItem';
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

export default class TopicsPage extends Component {
    render() {
        return (
            <Wrapper>
                <Page>
                    <Grid>
                        <GridColumn>
                            <PageTitle>Topics</PageTitle>
                            <Description>
                                Here's a page description.
                            </Description>
                            <TopicItem />
                        </GridColumn>
                    </Grid>
                </Page>
            </Wrapper>

        );
    }
}