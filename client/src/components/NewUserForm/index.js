import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Jumbotron, Container } from 'reactstrap';
import '../styles/newuserform.scss';
//import '../styles/variables.scss';


export default class RegForm extends React.Component {
  render() {
    return (
      <div className="page-body">
        <Jumbotron className="form-holder">
          <Container fluid>
            <Form>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="First Name">First Name</Label>
                    <Input type="text" name="First Name" placeholder="First Name" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="Last Name">Last Name</Label>
                    <Input type="text" name="Last Name" placeholder="Last Name" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                  </InputGroup>
                </Col>

              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
                <Col md={1}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Register</Button>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}