import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormExample = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">name</Label>
        <Input
          type="name"
          name="name"
          id="exampleName"
          placeholder="NAME placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNa">family name</Label>
        <Input
          type="name"
          name="name"
          id="exampleFamilyName"
          placeholder="FamilyName placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNa">adress</Label>
        <Input
          type="adress"
          name="adress"
          id="exampleadress"
          placeholder="adress placeholder"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleNa">adress email</Label>
        <Input
          type="email"
          name="adress email"
          id="exampleEmail"
          placeholder="Email placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default FormExample;
