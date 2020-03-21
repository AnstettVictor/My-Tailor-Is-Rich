import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';

import './style.scss';

const Columns = () => (
  <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment.Group>
          <Segment className="title">Entrées d'argent</Segment>
          <Segment.Group raised>
            <Segment className="line">EUROMILLION: 15 000 000 €</Segment>
            <Segment className="line">Je T'Exploite SAS: 1200 €</Segment>
            <Segment className="line">CAF: 200€</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
          <Segment className="title">Dépenses fixes</Segment>
          <Segment.Group raised>
            <Segment className="line">Loyer Parisien: 1800 €</Segment>
            <Segment className="line">EDF: 50€</Segment>
            <Segment className="line">Charges: 200€</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
          <Segment className="title">Dépenses imprévue/Loisir</Segment>
          <Segment.Group raised>
            <Segment className="line">Film pourri au ciné: 15€</Segment>
            <Segment className="line">FF7 Remake FNAC: 59.99€</Segment>
            <Segment className="line">Masques FFP2: un rein</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid.Row>

  </Grid>
);

export default Columns;
