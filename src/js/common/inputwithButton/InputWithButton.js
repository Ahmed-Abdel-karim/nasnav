/* eslint-disable react/prop-types */
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import Input from '../input/Input';

import './input-with-button.scss';

export default function InputWithButton({ inputProps, buttonProps, children }) {
  return (
    <InputGroup className="mb-3 inputGroup">
      <Input className="input" {...inputProps} />
      <InputGroup.Append>
        <Button className="button" {...buttonProps}>
          {children}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
