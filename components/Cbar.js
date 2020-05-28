import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button } from '@material-ui/core';


const layoutStyle = {
  marginLeft: 0,
  marginTop: 0,
  left: 0,
  top: 0,
  padding: 10,
  height: "100%",
  border: '1px solid #DDD'
}

const contStyle = {
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <Container maxWIdth="sm">
      <Button variant="contained"> Home</Button>
    </Container>
  )
}
