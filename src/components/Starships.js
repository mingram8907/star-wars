import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function Starships({ data }) {
    return (
        <div>
           <h1>Starships</h1>
           <Grid columns={4}>
            {data.map((starship, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{starship.name}</Card.Header>
                                <Card.Description>
                                    <strong>Model</strong>
                                    <p>{starship.model}</p>
                                    <strong>Manufacturer</strong>
                                    <p>{starship.manufacturer}</p>
                                    <strong>Crew</strong>
                                    <p>{starship.crew}</p>
                                    <strong>Passengers</strong>
                                    <p>{starship.passengers}</p>
                                    <strong>Starship Class</strong>
                                    <p>{starship.starship_class}</p>
                                </Card.Description>
                            </Card.Content>  
                        </Card>

                    </Grid.Column>
                )
            })}
           </Grid>
        </div>
    )
}


export default Starships;