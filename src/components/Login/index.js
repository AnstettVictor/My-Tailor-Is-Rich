import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Label } from 'semantic-ui-react';

import './style.scss';

const Login = ({ user }) => (
  <Menu mobile={16} tablet={8} computer={4} compact>
    <Menu.Item>
      <img src="https://images.onlinelabels.com/images/clip-art/Bonzo/Top%20hat,%20moustache,%20monocle-205784.png" alt="MyTailor Logo" />
    </Menu.Item>

    <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>

    <Menu.Item>
      <Label as='a' image>
        <img src={user.avatar} alt="user avatar" />
        {user.name}
      </Label>
    </Menu.Item>
  </Menu>
);

Login.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default Login;
