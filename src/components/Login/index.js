import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Label } from 'semantic-ui-react';

import './style.scss';

const Login = () => (
  <Menu compact>
    <Menu.Item>
          <img src='https://images.onlinelabels.com/images/clip-art/Bonzo/Top%20hat,%20moustache,%20monocle-205784.png' alt="MyTailor Logo" />
    </Menu.Item>

    <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>

    <Menu.Item>
      <Label as='a' image>
        <img src='https://react.semantic-ui.com/images/avatar/small/zoe.jpg' />
        Compote23
      </Label>
  </Menu.Item>
  </Menu>
);

export default Login;
