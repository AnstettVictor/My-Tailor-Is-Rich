import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Form, Button, Icon } from 'semantic-ui-react';
import AccountLine from './AccountLine';

import './style.scss';

const Columns = ({
  incomeList,
  fixedExpanseList,
  extraExpanseList,
  onIncomeTextInputChange,
  onIncomeAmountInputChange,
  onExpanseTextInputChange,
  onExpanseAmountInputChange,
  onExtraTextInputChange,
  onExtraAmountInputChange,
  incomeTextValue,
  incomeAmountValue,
  expanseTextValue,
  expanseAmountValue,
  extraTextValue,
  extraAmountValue,
  onFormSubmit,
}) => {
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
                  <input
                    value={incomeTextValue}
                    onChange={(evt) => {
                      onIncomeTextInputChange(evt.target.value);
                    }}
                    type="text"
                    placeholder="Entrée d'argent"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    value={incomeAmountValue}
                    type="number"
                    onChange={(evt) => {
                      onIncomeAmountInputChange(evt.target.value);
                    }}
                    placeholder="Montant"
                  />
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
              <Form onSubmit={(evt) => {<input type="text" placeholder="Nom de la dépense" />
                evt.preventDefault();
                onFormSubmit();
              }}
              >
                <Form.Field>
                  <input
                    value={expanseTextValue}
                    onChange={(evt) => {
                      onExpanseTextInputChange(evt.target.value);
                    }}
                    type="text"
                    placeholder="Nom de la dépense"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    value={expanseAmountValue}
                    type="number"
                    onChange={(evt) => {
                      onExpanseAmountInputChange(evt.target.value);
                    }}
                    placeholder="Montant"
                  />
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
                  <input
                    value={extraTextValue}
                    onChange={(evt) => {
                      onExtraTextInputChange(evt.target.value);
                    }}
                    type="text"
                    placeholder="Nom de la dépense"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    value={extraAmountValue}
                    type="number"
                    onChange={(evt) => {
                      onExtraAmountInputChange(evt.target.value);
                    }}
                    placeholder="Montant"
                  />
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
  onIncomeTextInputChange: PropTypes.func.isRequired,
  onIncomeAmountInputChange: PropTypes.func.isRequired,
  onExpanseTextInputChange: PropTypes.func.isRequired,
  onExpanseAmountInputChange: PropTypes.func.isRequired,
  onExtraTextInputChange: PropTypes.func.isRequired,
  onExtraAmountInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  incomeTextValue: PropTypes.string.isRequired,
  incomeAmountValue: PropTypes.string.isRequired,
  expanseTextValue: PropTypes.string.isRequired,
  expanseAmountValue: PropTypes.string.isRequired,
  extraTextValue: PropTypes.string.isRequired,
  extraAmountValue: PropTypes.string.isRequired,
};

export default Columns;
