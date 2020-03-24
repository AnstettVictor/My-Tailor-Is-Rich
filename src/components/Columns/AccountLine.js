import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import './style.scss';

const AccountLine = ({ content, amount }) => {
  return (
    <Segment className="line">{`${content}: ${amount} €`}</Segment>

  );
};


AccountLine.propTypes = {
  content: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default AccountLine;
