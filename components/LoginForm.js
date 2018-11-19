import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class LoginForm extends Component {
  render() {
    return (
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>

    );
  }
}