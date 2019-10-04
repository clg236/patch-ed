import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import GoalItem from '../components/goals/GoalItem';
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

const GoalItems = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const SectionHeader = styled.header`
  margin-bottom: 2em;

  .title {
    font-size: 2rem;
    color: #292929;
  }
`

export default class GoalsPage extends Component {
    render() {
        return (
            <Wrapper>
              
                <Page>
                    <Grid>
                        <GridColumn>
                            <PageTitle>Learning Goals</PageTitle>
                            <Description>
                                Here's a page description.
                            </Description>
                            <SectionHeader>
                              <h1 className="title">Basic Web Development</h1>
                              <p>Mastery of basic web development technologies and languages, including HTML, CSS and JavaScript are essential skills you'll need before you can move on to create applications</p>
                            </SectionHeader>
                            <GoalItems>
                              <GoalItem />
                              <GoalItem />
                              <GoalItem />
                              <GoalItem />
                            </GoalItems>
                        </GridColumn>
                    </Grid>
                </Page>
            </Wrapper>

        );
    }
}