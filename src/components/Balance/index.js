import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import './style.scss';

const Balance = () => (
  <Label color="green" size="large">
  Votre solde:
    <Label.Detail>15 millions et des brouettes</Label.Detail>
  </Label>
);

export default Balance;
