import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Styled from 'styled-components';

const StyledPlanets = Styled.h1`
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

export default function Planets({ data }) {
    return (
        <>
        <StyledPlanets>
        <h1>Planets</h1>
        </StyledPlanets>
        <Grid columns={4}>
            {data.map((planets, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <StyledCardShadow>
                            <Card.Content>
                                <h3>{planets.name}</h3>
                                <Card.Description>
                                    <StyledH4>
                                    <h4>Climate:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.climate}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Diameter:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.diameter}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Population:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.population}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Gravity:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.gravity}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Terrain:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.terrain}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Rotation Period:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.rotation_period}</p>
                                    </StyledParagraph>
                                    <StyledH4>
                                    <h4>Orbital Period:</h4>
                                    </StyledH4>
                                    <StyledParagraph>
                                    <p>{planets.orbital_period}</p>
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
    )
}