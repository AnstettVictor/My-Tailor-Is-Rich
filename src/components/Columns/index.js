import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Form, Button, Icon } from 'semantic-ui-react';
import AccountLine from './AccountLine';

import './style.scss';

const Columns = ({ incomeList, fixedExpanseList, extraExpanseList }) => {

  return (
    <Grid columns='equal'>
      <Grid.Row stretched mobile={16} tablet={8} computer={4}>
        <Grid.Column>
          <Segment.Group>
            <Segment className="title">Entrées d'argent</Segment>
            <Segment.Group raised>
              {
                incomeList.map(({ id, content, amount }) => (
                  <AccountLine key={id} content={content} amount={amount} className="line" />
                ))
              }
              <div>
                <Button loading primary>
                  Loading
                </Button>
              </div>
              <Form>
                <Form.Field>
                  <input type="text" placeholder="Entrée d'argent" />
                </Form.Field>
                <Form.Field>
                  <input type="number" placeholder="Montant" />
                </Form.Field>
                <Button className="inputButton" type="submit">Ajouter</Button>
              </Form>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment className="title">Dépenses fixes</Segment>
            <Segment.Group raised>
              {
                fixedExpanseList.map(({ id, content, amount }) => (
                  <AccountLine key={id} content={content} amount={amount} className="line" />
                ))
              }
              <div>
                <Button loading primary>
                  Loading
                </Button>
              </div>
              <Form>
                <Form.Field>
                  <input type="text" placeholder="Nom de la dépense" />
                </Form.Field>
                <Form.Field>
                  <input type="number" placeholder="Montant" />
                </Form.Field>
                <Button className="inputButton" type="submit">Ajouter</Button>
              </Form>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment className="title">Dépenses imprévues</Segment>
            <Segment.Group raised>
              {
                extraExpanseList.map(({ id, content, amount }) => (
                  <AccountLine key={id} content={content} amount={amount} className="line" />
                ))
                }
              <div>
                <Button icon primary>
                  <Icon name='add circle' />
                </Button>
              </div>
              <Form>
                <Form.Field>
                  <input type="text" placeholder="Nom de la dépense" />
                </Form.Field>
                <Form.Field>
                  <input type="number" placeholder="Montant" />
                </Form.Field>
                <Button className="inputButton" type="submit">Ajouter</Button>
              </Form>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};


Columns.propTypes = {
  incomeList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  fixedExpanseList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  extraExpanseList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Columns;
