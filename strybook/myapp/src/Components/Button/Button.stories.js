import React from 'react';
import Button from './Button';
export default {
  title: 'myButton',
  component: Button,
};
export const Red = () => <Button color='red' name='Stop' />;
export const Green = () => <Button color='green' name='Go' />;
export const Yellow = () => <Button color='yellow' name='Caution' />;
