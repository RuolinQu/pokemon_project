import React from "react";
import PokemonCard from "../Cards/Card";

const CardContainer = () => {
  return (
    <Grid stackable columns={3}>
      <Grid.Column>
        <Segment>
          <PokemonCard />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <PokemonCard />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default CardContainer;
