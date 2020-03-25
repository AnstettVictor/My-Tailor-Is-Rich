import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import './style.scss';

const Balance = ({ balance }) => (
  <Label
    mobile={16}
    tablet={8}
    computer={4}
    color={balance >= 0 ? "green" : "red"}
    size="large"
  >
  Votre solde:
    <Label.Detail>{ `${balance} €` }</Label.Detail>
  </Label>
);


Balance.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default Balance;
