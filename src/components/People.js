import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Styled from 'styled-components';

const StyledPeople = Styled.h1`
color: 	#ffc100;
`;

const StyledParagraph = Styled.p`
color: #ff4d00;
text-transform: Uppercase;
`;

const StyledCardShadow = Styled.div`
padding 2% 4%;

&:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`;

const StyledH4 = Styled.h4`
color: #555;
`;

export default function People({ data }) {
    return (
        <>
        <StyledPeople>
        <h1>People</h1>
        </StyledPeople>
        <Grid columns={4}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <StyledCardShadow>
                            <Card.Content>
                                <h3>{people.name}</h3>
                                <Card.Description>
                                    <StyledH4>
                                    <h4>Height:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{people.height}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Mass:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{people.mass}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Hair Color:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{people.hair_color}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Skin Color:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{people.skin_color}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Eye Color:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{people.eye_color}</p>
                                    </StyledParagraph>
                                </Card.Description>
                            </Card.Content>
                            </StyledCardShadow>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        </>
    );
}